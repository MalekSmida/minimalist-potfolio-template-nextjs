// local files
import { INavButton, NavButton } from '../NavButton';

interface PropsNavHeader {
  navButtonList: INavButton[];
}

const NavHeader: React.FC<PropsNavHeader> = ({ navButtonList }) => {
  return (
    <nav
      id="header"
      role="navigation"
      aria-label="Navigation menu"
      className="mx-auto flex h-16 max-w-screen-xl items-center justify-between bg-white px-4 sm:px-6 lg:px-8"
    >
      {navButtonList?.map((item) => (
        <NavButton key={item.anchorLink} title={item.title} anchorLink={item.anchorLink} />
      ))}
    </nav>
  );
};

export default NavHeader;
