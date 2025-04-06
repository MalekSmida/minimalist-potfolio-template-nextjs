/**
 * ScrollProgressIndicatorBar Component
 *
 * A client-side component that displays a progress bar at the top of the page
 * indicating the user's scroll position. The bar animates smoothly as the user
 * scrolls through the content.
 *
 * Accessibility features:
 * - Uses role="progressbar" to indicate the element's purpose
 * - Provides aria-valuenow, aria-valuemin, and aria-valuemax for screen readers
 * - Includes aria-label for context
 * - Uses semantic HTML elements
 *
 * @component
 * @example
 * ```tsx
 * <ScrollProgressIndicatorBar />
 * ```
 */

// As useMesureVerticalScroll uses useEffect and useState this component should be client component.
// Next.js will still perform SSR (Server-Side Rendering) for the rest of your application, but only renders the components with "use client" as client components, including this one.
// This approach is called "islands architecture" in Next.js - where most of the page is static/server-rendered, with interactive "islands" that are client-rendered.
'use client';

// local files
import { useMesureVerticalScroll } from '@/hooks';

const ScrollProgressIndicatorBar: React.FC = () => {
  const { scrollProgress } = useMesureVerticalScroll();

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="bg-primary fixed top-0 left-0 z-40 h-1 rounded-r duration-300 ease-in-out"
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  );
};

export default ScrollProgressIndicatorBar;
