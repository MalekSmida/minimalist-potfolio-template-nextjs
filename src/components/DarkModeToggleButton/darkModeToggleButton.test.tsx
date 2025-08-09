import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

// Local files
import DarkModeToggleButton from './DarkModeToggleButton';
import { useDarkMode, useAnalytics } from '@/hooks';

// Mock the hooks
vi.mock('@/hooks', () => ({
  useDarkMode: vi.fn(),
  useAnalytics: vi.fn(),
}));
// Mock functions
const toggleDarkMode = vi.fn();
const trackDarkModeToggle = vi.fn();

describe('DarkModeToggleButton Component', () => {
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

  test('should render moon button when isDark is false', () => {
    // Mock the hook returns
    vi.mocked(useDarkMode).mockReturnValue({ isDark: false, toggleDarkMode });
    vi.mocked(useAnalytics).mockReturnValue({ trackDarkModeToggle } as ReturnType<typeof useAnalytics>);

    render(<DarkModeToggleButton />);

    // The moon button should be in the document
    const moonButton = screen.getByRole('button', { name: /Switch to dark mode/i });
    expect(moonButton).toBeDefined();

    // The sun button should not be in the document
    const sunButton = screen.queryByRole('button', { name: /Switch to light mode/i });
    expect(sunButton).toBeNull();
  });

  test('should render sun button when isDark is true', () => {
    // Mock the hook returns
    vi.mocked(useDarkMode).mockReturnValue({ isDark: true, toggleDarkMode });
    vi.mocked(useAnalytics).mockReturnValue({ trackDarkModeToggle } as ReturnType<typeof useAnalytics>);

    render(<DarkModeToggleButton />);

    // The moon button should not be in the document
    const moonButton = screen.queryByRole('button', { name: /Switch to dark mode/i });
    expect(moonButton).toBeNull();

    // The sun button should be in the document
    const sunButton = screen.getByRole('button', { name: /Switch to light mode/i });
    expect(sunButton).toBeDefined();
  });

  test('should call toggleDarkMode when moon button is clicked', () => {
    // Mock the hook returns
    vi.mocked(useDarkMode).mockReturnValue({ isDark: false, toggleDarkMode });
    vi.mocked(useAnalytics).mockReturnValue({ trackDarkModeToggle } as ReturnType<typeof useAnalytics>);

    render(<DarkModeToggleButton />);

    // Get the button and click it
    const moonButton = screen.getByRole('button', { name: /Switch to dark mode/i });
    fireEvent.click(moonButton);

    // Check if toggleDarkMode and trackDarkModeToggle were called
    expect(toggleDarkMode).toHaveBeenCalledTimes(1);
    expect(trackDarkModeToggle).toHaveBeenCalledWith(true);
  });

  test('should call toggleDarkMode when sun button is clicked', () => {
    // Mock the hook returns
    vi.mocked(useDarkMode).mockReturnValue({ isDark: true, toggleDarkMode });
    vi.mocked(useAnalytics).mockReturnValue({ trackDarkModeToggle } as ReturnType<typeof useAnalytics>);

    render(<DarkModeToggleButton />);

    // Get the button and click it
    const sunButton = screen.getByRole('button', { name: /Switch to light mode/i });
    fireEvent.click(sunButton);

    // Check if toggleDarkMode and trackDarkModeToggle were called
    expect(toggleDarkMode).toHaveBeenCalledTimes(1);
    expect(trackDarkModeToggle).toHaveBeenCalledWith(false);
  });
});
