// As useMesureVerticalScroll uses useEffect and useState this component should be client component.
// Next.js will still perform SSR (Server-Side Rendering) for the rest of your application, but only renders the components with "use client" as client components, including this one.
// This approach is called "islands architecture" in Next.js - where most of the page is static/server-rendered, with interactive "islands" that are client-rendered.
'use client';

// local files
import { useMesureVerticalScroll } from '@/hooks';

/**
 * Progress bar animation shown in top of page when scrolling
 */
const ScrollProgressIndicatorBar: React.FC = () => {
  const { scrollProgress } = useMesureVerticalScroll();
  return (
    <span
      aria-hidden="true"
      className="bg-primary fixed top-0 left-0 z-40 h-1 rounded-r duration-300 ease-in-out"
      style={{
        width: `${scrollProgress}%`,
      }}
    ></span>
  );
};

export default ScrollProgressIndicatorBar;
