import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook that detects when vertical scroll position exceeds a threshold
 *
 * This hook tracks the window's scroll position and provides a boolean state
 * that indicates whether the user has scrolled beyond a certain point (300px).
 * It's commonly used to control the visibility of "back to top" buttons or
 * similar UI elements that should only appear after scrolling down.
 *
 * Features:
 * - Automatically attaches and cleans up scroll event listeners
 * - Uses useCallback to prevent unnecessary re-renders
 * - Only updates state when crossing the threshold to minimize renders
 *
 * @returns {Object} Object containing:
 *   - showArrowButton: boolean - Whether the scroll position is greater than 300px
 *
 * @example
 * // In a component:
 * const { showArrowButton } = useShowBackToTop();
 *
 * return (
 *   <div>
 *     {showArrowButton && (
 *       <button onClick={scrollToTop}>
 *         Back to Top
 *       </button>
 *     )}
 *   </div>
 * );
 */
function useShowBackToTop() {
  // state
  const [showArrowButton, setShowArrowButton] = useState(false);

  // event
  const handleScroll = useCallback(() => {
    if (window.scrollY > 300) {
      setShowArrowButton(true);
    } else {
      setShowArrowButton(false);
    }
  }, []);

  useEffect(() => {
    // set event listener for scroll position
    window.addEventListener('scroll', handleScroll);

    return () => {
      // clear event listener when unmount (optimization)
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { showArrowButton };
}

export default useShowBackToTop;
