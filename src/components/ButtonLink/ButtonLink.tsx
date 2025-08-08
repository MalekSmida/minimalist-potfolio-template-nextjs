import Link from 'next/link';

interface ButtonLinkProps {
  link: string;
  label: string;
  ariaLabel?: string;
  isNavigation?: boolean;
  isPrimary?: boolean;
}

function ButtonLink({ link, label, isNavigation, ariaLabel, isPrimary }: ButtonLinkProps) {
  const linkStyle = `group border-primary dark:border-secondary relative z-20 inline-flex cursor-pointer items-center overflow-hidden rounded border px-8 py-3 focus:ring ${isPrimary ? 'bg-primary hover:text-primary active:text-primary dark:bg-secondary dark:hover:text-secondary dark:active:text-secondary text-white hover:bg-transparent dark:text-gray-900' : 'text-primary dark:text-secondary'}`;

  // If the link is for navigation, we use Link component for client-side navigation
  if (isNavigation) {
    return (
      <Link className={linkStyle} href={link} aria-label={ariaLabel || `Link to ${label} page`}>
        <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Download icon"
            aria-hidden="true"
            focusable="false"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
        <span className="text-sm font-medium transition-all group-hover:mr-4">{label}</span>
      </Link>
    );
  }

  return (
    <a
      className={linkStyle}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={ariaLabel}
    >
      <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Download icon"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
      <span className="text-sm font-medium transition-all group-hover:mr-4">{label}</span>
    </a>
  );
}

export default ButtonLink;
