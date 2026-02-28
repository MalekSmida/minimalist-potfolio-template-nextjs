'use client';

import { useAnalytics } from '@/hooks';

interface ContactCardProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ href, title, icon, description }) => {
  const { trackContactMethod } = useAnalytics();
  const isExternalLink = href.startsWith('http');

  const handleClick = () => {
    trackContactMethod(title.toLowerCase(), href);
  };

  return (
    <a
      href={href}
      target={isExternalLink ? '_blank' : '_self'}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      className="group contact-card block transform transition-all duration-300 hover:scale-102 hover:shadow-lg"
      aria-label={`${title}${description ? `: ${description}` : ''}${isExternalLink ? ' (opens in new tab)' : ''}`}
      onClick={handleClick}
    >
      <div className="dark:hover:bg-gray-750 flex items-center space-x-3 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 sm:space-x-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700">
        <div className="group-hover:bg-primary dark:group-hover:bg-secondary flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors duration-300 group-hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:group-hover:text-gray-900">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
        <div className="group-hover:text-primary dark:group-hover:text-secondary text-gray-400 transition-colors duration-300 dark:text-gray-500">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
