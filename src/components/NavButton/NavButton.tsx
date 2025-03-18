// local files
import { INavButton } from './navButton.types';
import NavButtonAnchor from './NavButtonAnchor';
import NavButtonHref from './NavButtonHref';

const NavButton: React.FC<INavButton> = ({ title, link }) => {
  return link.type === 'href' ? (
    <NavButtonHref title={title} link={link} />
  ) : (
    <NavButtonAnchor title={title} link={link} />
  );
};

export default NavButton;
