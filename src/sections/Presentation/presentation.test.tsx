import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Presentation from './Presentation';

const mockData = {
  name: 'John Doe',
  jobTitle: 'Software Engineer',
  yearsOfExperience: '1000 years',
  description: 'Self motivated, agile mind software engineer.',
};

// Mock ButtonLink component
vi.mock('@/components/ButtonLink', () => ({
  default: ({ link, label, ariaLabel }: { link: string; label: string; ariaLabel: string }) => (
    <a href={link} aria-label={ariaLabel}>{label}</a>
  ),
}));

describe('Presentation Section', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('should renders the Presentation component without errors', () => {
    render(<Presentation name="" />);

    // Should show fallback name
    expect(screen.getByText('Hi, I am No body')).toBeDefined();
  });

  test('should renders the name correctly', () => {
    render(<Presentation name={mockData.name} />);
    expect(screen.getByRole('heading', { name: 'Hi, I am John Doe' })).toBeDefined();
  });

  test('should renders job titles correctly', () => {
    render(<Presentation name="" jobTitle={mockData.jobTitle} />);
    expect(screen.getByText(mockData.jobTitle)).toBeDefined();
  });

  test('should renders years of experience correctly', () => {
    render(<Presentation name="" yearsOfExperience={mockData.yearsOfExperience} />);
    expect(screen.getByText(mockData.yearsOfExperience)).toBeDefined();
  });

  test('should renders description correctly', () => {
    render(<Presentation name="" description={mockData.description} />);
    expect(screen.getByText(mockData.description)).toBeDefined();
  });

  test('should renders contact button correctly', () => {
    render(
      <Presentation
        name={mockData.name}
        jobTitle={mockData.jobTitle}
      />,
    );
    const contactButton = screen.getByRole('link', { name: 'Link to contact page' });
    expect(contactButton.getAttribute('href')).toBe('/contact');
    expect(screen.getByText('Lets discuss your needs')).toBeDefined();
  });

  test('should not render consulting mention when not provided', () => {
    render(<Presentation name={mockData.name} />);
    expect(screen.queryByText('Check out my consulting')).toBeNull();
  });

  test('should render consulting mention when provided', () => {
    const consultingMention = {
      text: 'Need expert help?',
      linkLabel: 'My Consulting Page',
      linkUrl: 'https://example.com/consulting',
    };
    render(<Presentation name={mockData.name} consultingMention={consultingMention} />);
    expect(screen.getByText(/Need expert help\?/)).toBeDefined();
    const link = screen.getByRole('link', { name: 'Visit My Consulting Page (opens in new tab)' });
    expect(link.getAttribute('href')).toBe('https://example.com/consulting');
    expect(screen.getByText('My Consulting Page')).toBeDefined();
  });
});
