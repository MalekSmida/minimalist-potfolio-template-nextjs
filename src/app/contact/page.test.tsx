import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// Mock the services
vi.mock('@/services', () => ({
  getContactData: vi.fn().mockResolvedValue({
    contact: {
      email: 'test@example.com',
      phone: '+1234567890',
    },
    links: {
      linkedin: 'https://linkedin.com/test',
      github: 'https://github.com/test',
      stackoverflow: 'https://stackoverflow.com/test',
      cvPdf: 'https://example.com/cv.pdf',
    },
  }),
}));

// Mock ContactCard and ButtonLink
vi.mock('@/components', () => ({
  ContactCard: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="contact-card">
      {title}: {description}
    </div>
  ),
  ButtonLink: ({ label }: { label: string }) => (
    <button data-testid="button-link">{label}</button>
  ),
}));

// Mock SVG icons
vi.mock('@/assets/svgIcons', () => ({
  EmailIcon: () => <div data-testid="email-icon" />,
  PhoneIcon: () => <div data-testid="phone-icon" />,
  LinkedinIcon: () => <div data-testid="linkedin-icon" />,
  GithubIcon: () => <div data-testid="github-icon" />,
  StackOverflowIcon: () => <div data-testid="stackoverflow-icon" />,
}));

// Import after mocking
import Contact from './page';

describe('Contact Page', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render contact page with heading', async () => {
    const ContactElement = await Contact();
    render(ContactElement);

    expect(screen.getByText('Get In Touch 👋')).toBeDefined();
    expect(screen.getByText(/Hiring for a consulting role/)).toBeDefined();
  });

  test('should render CV download button', async () => {
    const ContactElement = await Contact();
    render(ContactElement);

    expect(screen.getByTestId('button-link')).toBeDefined();
    expect(screen.getByText('Download CV')).toBeDefined();
  });

  test('should render contact methods', async () => {
    const ContactElement = await Contact();
    render(ContactElement);

    const contactCards = screen.getAllByTestId('contact-card');
    expect(contactCards.length).toBeGreaterThan(0);
  });

  test('should have proper accessibility structure', async () => {
    const ContactElement = await Contact();
    render(ContactElement);

    const heading = screen.getByRole('heading', { name: 'Get In Touch 👋' });
    expect(heading.tagName).toBe('H1');

    const hiddenHeading = screen.getByText('Contact Methods');
    expect(hiddenHeading.className).toContain('sr-only');
  });
});