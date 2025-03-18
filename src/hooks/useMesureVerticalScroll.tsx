import { useState, useEffect } from 'react';

/**
 * Custom hook that detect when y scroll
 * Calculate position compared to height of page and return percent
 * Using event listener on window scroll
 *
 * Important : as this custom hook uses useState and useEffect, wherever it is used, the component should be client side
 * Docs: https://nextjs.org/docs/app/api-reference/directives/use-client
 */
function useMesureVerticalScroll() {
  // state
  const [scrollProgress, setScrollProgress] = useState(0);

  // event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      setScrollProgress(0);
      return;
    }

    const pageHeight = document.body.offsetHeight;
    const screenHeight = window.screen.height;

    // 0 < scrollRate < 1
    const scrollRate = (scrollPosition + screenHeight) / pageHeight;

    // make screenheight proportionel to the scroll position
    const screenHeightByRate = screenHeight * scrollRate;

    const finalEquation = ((scrollPosition + screenHeightByRate) / pageHeight) * 100;

    setScrollProgress(finalEquation);
  };

  useEffect(() => {
    // set event listener for scroll position
    window.addEventListener('scroll', handleScroll);

    return () => {
      // optimization: clear event listener when unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollProgress };
}

export default useMesureVerticalScroll;
