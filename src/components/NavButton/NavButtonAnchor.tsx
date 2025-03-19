// Next.js will still perform SSR (Server-Side Rendering) for the rest of your application, but only renders the components with "use client" as client components, including this one.
// This approach is called "islands architecture" in Next.js - where most of the page is static/server-rendered, with interactive "islands" that are client-rendered.
'use client';

// local files
import { useScrollToSection } from '@/hooks';
import { INavButton } from './navButton.types';

const NavButtonAnchor: React.FC<INavButton> = ({ title, link }) => {
  const { scrollToSection } = useScrollToSection();

  const handleClick = () => {
    scrollToSection(link.id);
  };

  return (
    <li>
      <button
        onClick={handleClick}
        aria-label={`Navigate to the section ${title}`}
        className="before:bg-primary hover:text-primary relative cursor-pointer text-sm font-medium transition-colors duration-300 ease-in-out select-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 dark:before:bg-blue-300 dark:hover:text-blue-300"
      >
        {title}
      </button>
    </li>
  );
};

export default NavButtonAnchor;
