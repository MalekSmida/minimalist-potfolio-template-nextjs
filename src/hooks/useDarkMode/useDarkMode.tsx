import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark mode functionality
 *
 * This hook handles:
 * - Detecting and applying the user's theme preference from localStorage
 * - Toggling between light and dark themes
 * - Persisting the user's theme preference in localStorage
 * - Applying the appropriate CSS classes to the document
 *
 * @returns {Object} Object containing:
 *   - isDark: boolean - Current theme state (true for dark mode, false for light mode)
 *   - toggleDarkMode: function - Function to toggle between light and dark themes
 *
 * @example
 * // In a component:
 * const { isDark, toggleDarkMode } = useDarkMode();
 *
 * // Use isDark to conditionally render UI elements:
 * return (
 *   <button onClick={toggleDarkMode}>
 *     {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
 *   </button>
 * );
 */
const useDarkMode = () => {
  // Initialize with 'light' as default
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if localStorage has a theme preference
    const savedTheme = localStorage.getItem('theme');

    // Use saved preference that already exists in localStorage
    if (savedTheme === 'dark') {
      // Apply theme
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  /**
   * Toggles between light and dark mode
   * - Updates the theme in localStorage
   * - Updates the component state
   * - Applies/removes the 'dark' class on the document element
   */
  const toggleDarkMode = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    // As setState is async, you should invert the value based on previous state value
    // setIsDark(!isDark) => Is not okay, because if you toggle the button multiple time, it could causes conlicts
    // React docs : https://react.dev/learn/queueing-a-series-of-state-updates#updating-the-same-state-multiple-times-before-the-next-render
    setIsDark((prevState) => !prevState);

    // Apply theme
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { isDark, toggleDarkMode };
};

export default useDarkMode;
