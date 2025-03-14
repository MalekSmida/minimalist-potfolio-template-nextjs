// local files
import { INavButton, NavButton } from '../NavButton';

interface PropsNavHeader {
  navButtonList: INavButton[];
}

const NavHeader: React.FC<PropsNavHeader> = ({ navButtonList }) => {
  return (
    <header id="header" role="banner" className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
      <nav aria-labelledby="header-navigation">
        <h2 className="sr-only" id="header-navigation">
          Navigation Header
        </h2>
        <ul className="flex gap-10 text-sm" role="list" aria-label="Main navigation">
          {navButtonList?.map((item) => (
            <NavButton key={item.anchorLink} title={item.title} anchorLink={item.anchorLink} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
