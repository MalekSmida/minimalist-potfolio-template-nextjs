// Next.js will still perform SSR (Server-Side Rendering) for the rest of your application.
// But only renders the components with "use client" as client components, including this one.
// This approach is called "islands architecture" in Next.js - where most of the page is static/server-rendered, with interactive "islands" that are client-rendered.
'use client';

// Local files
import { useShowBackToTop } from '@/hooks';

/**
 * Button handle scroll back to position y=0.
 * It is shown only when we scroll to the position y > 300, which is defined by useShowBackToTop hook.
 */
const BackToTopButton: React.FC = () => {
  // Hooks
  const { showArrowButton } = useShowBackToTop();

  // Events
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Should not render the button when y position is less than 300
  if (!showArrowButton) return;

  return (
    <button
      onClick={onScrollToTop}
      className="border-primary text-primary hover:bg-primary active:bg-primary fixed right-10 bottom-10 z-50 cursor-pointer rounded-full border p-3 hover:text-white"
      title="Scroll to top"
      aria-label="Scroll to top"
      aria-live="polite" // Announces the button action for screen readers
    >
      <span className="sr-only">Scroll to top</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
