import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// Mock CSS import
vi.mock('../styles/globals.css', () => ({}));

// Mock the components
vi.mock('@/components', () => ({
  BackToTopButton: () => <div>Back to Top Button</div>,
  Footer: () => <div>Footer</div>,
}));

// Mock the data services
vi.mock('@/services', () => ({
  getContactData: vi.fn().mockResolvedValue({
    email: 'test@example.com',
    address: 'Test Address',
    phone: '+1234567890',
    googleMapsLink: 'https://maps.example.com',
    linkedinProfile: 'https://linkedin.com/test',
    githubProfile: 'https://github.com/test',
    githubRepository: 'https://github.com/test/repo',
  }),
  getMetaData: vi.fn().mockResolvedValue({
    title: 'Test Title',
    description: 'Test Description',
  }),
}));

// Local files
import RootLayout from './layout';

describe('RootLayout', () => {
  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  test('should render layout with footer and other elements', async () => {
    render(
      await RootLayout({
        children: <div>Test Content</div>,
      }),
    );

    // Check for the main page content
    expect(screen.getByText('Test Content')).toBeDefined();

    // Check for the "Skip to main content" link
    expect(screen.getByText('Skip to main content')).toBeDefined();

    // Check for footer with correct email
    expect(screen.getByText('Footer with email: test@example.com')).toBeDefined();

    // Check for other elements
    expect(screen.getByText('Scroll Progress Indicator')).toBeDefined();
    expect(screen.getByText('Back to Top Button')).toBeDefined();

    // Check for main element with correct role
    expect(screen.getByRole('main')).toBeDefined();
  });
});
