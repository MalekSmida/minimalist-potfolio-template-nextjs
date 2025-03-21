// Next.js will still perform SSR (Server-Side Rendering) for the rest of your application, but only renders the components with "use client" as client components, including this one.
// This approach is called "islands architecture" in Next.js - where most of the page is static/server-rendered, with interactive "islands" that are client-rendered.
'use client';

import useShowNavHeader from '@/hooks/useShowNavHeader';
import DarkModeToggleButton from '../DarkModeToggleButton';
import NavButton, { INavButton } from '../NavButton';

interface PropsNavHeader {
  navButtonList: INavButton[];
}

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
      <div className="w-9"></div>
      <nav aria-labelledby="header-navigation" className="flex flex-1 items-center justify-center">
        <h2 className="sr-only" id="header-navigation">
          Navigation Header
        </h2>
        <ul
          className="flex gap-4 text-sm md:gap-8 lg:gap-10"
          role="list"
          aria-label="Main navigation"
        >
          {navButtonList?.map((item, index) => (
            <NavButton key={index} title={item.title} link={item.link} />
          ))}
        </ul>
      </nav>
      <div className="w-9">
        <DarkModeToggleButton />
      </div>
    </header>
  );
};

export default NavHeader;
