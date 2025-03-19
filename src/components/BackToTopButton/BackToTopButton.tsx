'use client';

// local files
import { useShowBackToTop } from '@/hooks';

/**
 * Button handle scroll back to position y=0
 * It is shown when we scroll to the position y > 300
 */
const BackToTopButton: React.FC = () => {
  // hooks
  const { showArrowButton } = useShowBackToTop();

  // events
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showArrowButton) return;

  return (
    <button
      onClick={onScrollToTop}
      className="border-primary text-primary hover:bg-primary active:bg-primary fixed right-10 bottom-10 inline-block cursor-pointer rounded-full border p-3 hover:text-white focus:ring focus:outline-none"
      title="Scroll to top"
      aria-label="Scroll to top"
      aria-live="polite" // Announces the button action for screen readers
    >
      <span className="sr-only">Back to top</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        role="img"
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
