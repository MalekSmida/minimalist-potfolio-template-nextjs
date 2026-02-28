import Image from 'next/image';

// local imports
import ButtonLink from '@/components/ButtonLink';
import { ConsultingMention } from '@/services/types';

interface PropsPresentation {
  name?: string;
  jobTitle?: string;
  yearsOfExperience?: string;
  description?: string;
  consultingMention?: ConsultingMention;
}

const Presentation: React.FC<PropsPresentation> = ({
  name,
  jobTitle,
  yearsOfExperience,
  description,
  consultingMention,
}) => {
  const displayName = name || 'No body';

  return (
    <section
      className="mt-22 mb-10 grid w-full grid-cols-1 lg:grid-cols-2"
      aria-labelledby="profile-heading"
      id="presentation"
    >
      {/* Profile Info Section */}
      <div className="p-4 text-center lg:p-8 lg:text-start" aria-labelledby="profile-heading">
        <h1 id="profile-heading" className="my-2 text-2xl font-bold sm:text-3xl lg:my-4">
          Hi, I am {displayName}
        </h1>
        {jobTitle && (
          <p className="my-2 text-lg text-gray-600 sm:text-xl dark:text-gray-200">{jobTitle}</p>
        )}
        {yearsOfExperience && (
          <p className="text-md text-primary dark:text-secondary my-2 font-medium">
            {yearsOfExperience}
          </p>
        )}
        {description && (
          <p className="mx-auto my-4 max-w-md text-gray-600 lg:mx-0 dark:text-gray-200">
            {description}
          </p>
        )}
        <ButtonLink
          link="/contact"
          label="Lets discuss your needs"
          ariaLabel="Link to contact page"
          isNavigation
          isPrimary
        />
        {consultingMention && (
          <p className="mx-auto mt-6 max-w-sm text-gray-600 lg:mx-0 dark:text-gray-300">
            {consultingMention.text}{' '}
            <a
              href={consultingMention.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-secondary font-medium underline"
              aria-label={`Visit ${consultingMention.linkLabel} (opens in new tab)`}
            >
              {consultingMention.linkLabel}
            </a>
          </p>
        )}
      </div>

      {/* Images Section */}
      <div className="group relative mx-auto mt-6 max-w-xl p-4 lg:mt-0 lg:w-full lg:p-0">
        <svg
          className="animated-spin-dynamic absolute top-6 left-1/2 w-2/3 -translate-x-1/2 rotate-30 lg:w-4/5"
          viewBox="0 0 829 829"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Presentation's animation icon"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="primary-to-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fcd34d" /> {/* secondary */}
              <stop offset="100%" stopColor="#92400E" /> {/* primary color */}
            </linearGradient>
          </defs>
          <rect width="829" height="829" rx="200" fill="url(#primary-to-blue)" />
        </svg>

        <Image
          src="/static/images/presentation.webp"
          alt={`${displayName}'s presentation picture`}
          className="relative"
          priority={true}
          width={768}
          height={768}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <Image
          src="/static/images/recommendation.webp"
          alt={`${displayName}'s recommendation picture`}
          width={450}
          height={150}
          className="absolute right-0 bottom-0 z-10 border border-black transition-transform duration-300 ease-in-out group-hover:scale-105 lg:right-40 lg:bottom-20 xl:right-70 xl:bottom-32"
        />
      </div>
    </section>
  );
};

export default Presentation;
