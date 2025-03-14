import { INavButton } from './navButton.types';

const NavButton: React.FC<INavButton> = ({ title, anchorLink }) => {
  return (
    <li>
      <a
        href={anchorLink}
        aria-label={`Navigate to the section ${title}`}
        className="before:bg-primary hover:text-primary relative cursor-pointer text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out select-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100"
      >
        {title}
      </a>
    </li>
  );
};

export default NavButton;
