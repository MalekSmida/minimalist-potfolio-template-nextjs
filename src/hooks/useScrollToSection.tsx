import { useCallback } from 'react';

/**
 * Custom hook to handle smooth scrolling to sections on the page.
 * @returns {Function} scrollToSection - Function to scroll to a specific section by ID.
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

  return scrollToSection;
};

export default useScrollToSection;
