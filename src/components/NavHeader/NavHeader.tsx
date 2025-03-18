// local files
import DarkModeToggleButton from '../DarkModeToggleButton';
import NavButton, { INavButton } from '../NavButton';

interface PropsNavHeader {
  navButtonList: INavButton[];
}

const NavHeader: React.FC<PropsNavHeader> = ({ navButtonList }) => {
  return (
    <header
      id="header"
      role="banner"
      className="z-30 flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8"
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
          {navButtonList?.map((item) => (
            <NavButton key={item.link.id} title={item.title} link={item.link} />
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
