'use client';
// As useMesureVerticalScroll uses useEffect and useState this component should be client component.
// Next.js will still perform SSR (Server-Side Rendering) for the rest of your application because we only marked this component as a client component.
// This approach is called "islands architecture" in Next.js - where most of the page is static/server-rendered, with interactive "islands" that are client-rendered.

// local files
import { useMesureVerticalScroll } from '@/hooks';

/**
 * Progress bar animation shown in top of page when scrolling
 */
const ProgressScrollBar: React.FC = () => {
  const { scrollProgress } = useMesureVerticalScroll();
  return (
    <span
      aria-hidden="true"
      className="bg-primary fixed top-0 left-0 z-50 h-1 rounded-r duration-300 ease-in-out"
      style={{
        width: `${scrollProgress}%`,
      }}
    ></span>
  );
};

export default ProgressScrollBar;
