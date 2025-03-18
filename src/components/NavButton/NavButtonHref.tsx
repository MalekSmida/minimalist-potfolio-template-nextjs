// local files
import { INavButton } from './navButton.types';

const NavButtonHref: React.FC<INavButton> = ({ title, link }) => {
  return (
    <li>
      <a
        href={link.id}
        aria-label={`Navigate to the page ${title}`}
        className="before:bg-primary hover:text-primary relative cursor-pointer text-sm font-medium transition-colors duration-300 ease-in-out select-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100"
      >
        {title}
      </a>
    </li>
  );
};

export default NavButtonHref;
