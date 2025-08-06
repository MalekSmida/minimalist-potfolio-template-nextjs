// Next.js will still perform SSR (Server-Side Rendering) for the rest of your application, but only renders the components with "use client" as client components, including this one.
// This approach is called "islands architecture" in Next.js - where most of the page is static/server-rendered, with interactive "islands" that are client-rendered.
'use client';

import Link from 'next/link';

// local imports
import { useShowNavHeader } from '@/hooks';
import DarkModeToggleButton from '../DarkModeToggleButton';
import { INavButton } from './navHeader.types';

interface PropsNavHeader {
  navButtonList: INavButton[];
}

const NavButton = ({ title, page }: INavButton) => (
  <li>
    <Link
      href={page}
      aria-label={`Navigate to the page ${title}`}
      className="before:bg-primary hover:text-primary relative cursor-pointer text-sm font-medium transition-colors duration-300 ease-in-out select-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 dark:before:bg-blue-300 dark:hover:text-blue-300"
    >
      {title}
    </Link>
  </li>
);

/**
 * Navigation Header Component
 *
 * Renders a fixed header with navigation links and a dark mode toggle.
 * The header will hide/show based on scroll direction (managed by useShowNavHeader hook).
 *
 * Features:
 * - Fixed positioning at the top of the viewport
 * - Auto-hide on scroll down, show on scroll up
 * - Responsive design with proper spacing
 * - Dark mode support
 * - Accessibility compliant with proper ARIA attributes
 *
 * @param {PropsNavHeader} props - Component props
 * @returns {JSX.Element} Rendered NavHeader component
 *
 * @example
 * import { NavHeader } from '@/components';
 *
 * const navButtons = [
 *   { title: 'Home', page: '/' },
 *   { title: 'About', page: '/about' }
 * ];
 *
 * <NavHeader navButtonList={navButtons} />
 */
const NavHeader: React.FC<PropsNavHeader> = ({ navButtonList }) => {
  const { showNavHeader } = useShowNavHeader();

  return (
    <header
      id="header"
      role="banner"
      className={`fixed z-30 flex h-14 w-full items-center justify-between bg-white px-4 transition-transform duration-300 sm:px-6 lg:px-8 dark:bg-gray-900 ${
        showNavHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-2 min-w-9"></div>
      <nav aria-labelledby="header-navigation" className="flex flex-1 items-center justify-center">
        <h2 className="sr-only" id="header-navigation">
          Navigation Header
        </h2>
        <ul
          className="flex gap-4 text-sm md:gap-8 lg:gap-10"
          role="list"
          aria-label="Main navigation"
        >
          {navButtonList?.map(({ title, page }) => (
            <NavButton key={title} title={title} page={page} />
          ))}
        </ul>
      </nav>
      <div className="mx-2">
        <DarkModeToggleButton />
      </div>
    </header>
  );
};

export default NavHeader;
