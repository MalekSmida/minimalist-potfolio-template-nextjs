import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// Mock CSS import
vi.mock('../styles/globals.css', () => ({}));

// Mock the components
vi.mock('@/components', () => ({
  BackToTopButton: () => <div>Back to Top Button</div>,
  Footer: () => <div>Footer</div>,
  NavHeader: () => <div>Navigation Header</div>,
}));

// Mock the data services
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
      websiteRepo: 'https://github.com/test/repo',
    },
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

    // Check for footer
    expect(screen.getByText('Footer')).toBeDefined();

    // Check for navigation header
    expect(screen.getByText('Navigation Header')).toBeDefined();

    // Check for back to top button
    expect(screen.getByText('Back to Top Button')).toBeDefined();

    // Check for main element with correct role
    expect(screen.getByRole('main')).toBeDefined();
  });
});
