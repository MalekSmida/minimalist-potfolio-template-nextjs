import { expect, test, describe, afterEach, vi, beforeEach } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

// Local files
import BackToTopButton from './BackToTopButton';
import { useShowBackToTop } from '@/hooks';

// Mock the hook
vi.mock('@/hooks', () => ({
  useShowBackToTop: vi.fn(),
}));
// Mock window.scrollTo
const scrollToMock = vi.fn();
window.scrollTo = scrollToMock;

describe('BackToTopButton Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
    // Clean up after each test
    vi.restoreAllMocks();
  });

  test('1- should not render when showArrowButton is false', () => {
    // Mock the hook to return false
    vi.mocked(useShowBackToTop).mockReturnValue({ showArrowButton: false });

    render(<BackToTopButton />);

    // The button should not be in the document
    const button = screen.queryByRole('button', { name: /scroll to top/i });
    expect(button).toBeNull();
  });

  test('2- should render when showArrowButton is true', () => {
    // Mock the hook to return true
    vi.mocked(useShowBackToTop).mockReturnValue({ showArrowButton: true });

    render(<BackToTopButton />);

    // The button should be in the document
    const button = screen.getByRole('button', { name: /scroll to top/i });
    expect(button).toBeDefined();
  });

  test('3- should call window.scrollTo when clicked', () => {
    // Mock the hook to return true
    vi.mocked(useShowBackToTop).mockReturnValue({ showArrowButton: true });

    render(<BackToTopButton />);

    // Get the button and click it
    const button = screen.getByRole('button', { name: /scroll to top/i });
    fireEvent.click(button);

    // Check if window.scrollTo was called with the correct arguments
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
