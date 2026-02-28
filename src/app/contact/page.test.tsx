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
      booking: 'https://example.com/booking',
    },
  }),
}));

// Mock ContactCard and ButtonLink
vi.mock('@/components', () => ({
  ContactCard: ({ title }: { title: string }) => (
    <div data-testid="contact-card">
      {title}
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
  WorkIcon: () => <div data-testid="work-icon" />,
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

    expect(screen.getByText('Get In Touch')).toBeDefined();
  });

  test('should render primary action buttons', async () => {
    const ContactElement = await Contact();
    render(ContactElement);

    const buttons = screen.getAllByTestId('button-link');
    expect(buttons.length).toBeGreaterThan(0);
    expect(screen.getByText('Book a discovery call')).toBeDefined();
    expect(screen.getByText('Send me an email')).toBeDefined();
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

    const heading = screen.getByRole('heading', { name: 'Get In Touch' });
    expect(heading.tagName).toBe('H1');

    const hiddenHeading = screen.getByText('Contact Methods');
    expect(hiddenHeading.className).toContain('sr-only');
  });
});
