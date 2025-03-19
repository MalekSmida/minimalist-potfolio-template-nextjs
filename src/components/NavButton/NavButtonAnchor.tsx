'use client';

// local files
import useScrollToSection from '@/hooks/useScrollToSection';
import { INavButton } from './navButton.types';

const NavButtonAnchor: React.FC<INavButton> = ({ title, link }) => {
  const scrollToSection = useScrollToSection();

  return (
    <li>
      <button
        onClick={() => scrollToSection(link.id)}
        aria-label={`Navigate to the section ${title}`}
        className="before:bg-primary hover:text-primary relative cursor-pointer text-sm font-medium transition-colors duration-300 ease-in-out select-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 dark:before:bg-violet-300 dark:hover:text-violet-300"
      >
        {title}
      </button>
    </li>
  );
};

export default NavButtonAnchor;
