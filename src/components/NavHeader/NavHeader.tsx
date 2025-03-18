// local files
import NavButton, { INavButton } from '../NavButton';

interface PropsNavHeader {
  navButtonList: INavButton[];
}

const NavHeader: React.FC<PropsNavHeader> = ({ navButtonList }) => {
  return (
    <header id="header" role="banner" className="z-10 flex h-16 items-center px-4 sm:px-6 lg:px-8">
      <nav aria-labelledby="header-navigation">
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
    </header>
  );
};

export default NavHeader;
