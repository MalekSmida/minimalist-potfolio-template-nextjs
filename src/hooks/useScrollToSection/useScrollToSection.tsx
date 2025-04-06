import { useCallback } from 'react';

/**
 * Custom hook to handle smooth scrolling to sections on the page
 *
 * This hook provides a memoized function that scrolls the viewport
 * to a specified section identified by its DOM ID. It uses the browser's
 * native smooth scrolling for a better user experience.
 *
 * Features:
 * - Memoized callback to prevent unnecessary re-renders
 * - Graceful error handling with console warnings for missing sections
 * - Uses native smooth scrolling for optimal performance
 * - Works with any element that has an ID attribute
 *
 * @returns {Object} Object containing:
 *   - scrollToSection: (id: string) => void - Function to scroll to element with matching ID
 *
 * @example
 * // In a component:
 * const { scrollToSection } = useScrollToSection();
 *
 * // In an event handler:
 * const handleNavClick = () => {
 *   scrollToSection('about');
 * };
 *
 * return (
 *   <button onClick={handleNavClick}>
 *     Go to About Section
 *   </button>
 * );
 */
const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with ID "${id}" not found.`);
    }
  }, []);

  return { scrollToSection };
};

export default useScrollToSection;
