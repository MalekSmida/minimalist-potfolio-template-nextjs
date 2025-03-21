import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook that detect user scoll up or down
 * It should return true when user scoll up or Y position is already 0
 * Using event listener on window scroll
 */
function useShowNavHeader() {
  // state
  const [showNavHeader, setShowNavHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show navbar if scrolling up or at the top
    if (currentScrollY < lastScrollY || currentScrollY === 0) {
      setShowNavHeader(true);
    } else {
      setShowNavHeader(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, setLastScrollY, setShowNavHeader]);

  useEffect(() => {
    // set event listener for scroll position
    window.addEventListener('scroll', handleScroll);

    // clear event listener when unmount (optimization)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { showNavHeader };
}

export default useShowNavHeader;
