import Image from 'next/image';

interface PropsPresentation {
  name?: string;
  jobTitle?: string;
  yearsOfExperience?: string;
  description?: string;
  cvPdfLink?: string;
}

const Presentation: React.FC<PropsPresentation> = ({
  name,
  jobTitle,
  yearsOfExperience,
  description,
  cvPdfLink,
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
          <p className="text-md text-primary my-2 font-medium dark:text-blue-300">
            {yearsOfExperience}
          </p>
        )}
        {description && (
          <p className="mx-auto my-4 max-w-md text-gray-600 lg:mx-0 dark:text-gray-200">
            {description}
          </p>
        )}
        {cvPdfLink && (
          <a
            className="group border-primary bg-primary hover:text-primary active:text-primary relative z-20 my-4 inline-flex cursor-pointer items-center overflow-hidden rounded border px-8 py-3 text-white hover:bg-transparent focus:ring dark:border-blue-300 dark:bg-blue-300 dark:text-gray-900 dark:hover:text-blue-300 dark:active:text-blue-300"
            href={cvPdfLink}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`Download ${displayName}'s resume as PDF`}
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
            <span className="text-sm font-medium transition-all group-hover:mr-4">
              Download my CV
            </span>
          </a>
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
              <stop offset="0%" stopColor="#3329ff" /> {/* primary color */}
              <stop offset="100%" stopColor="#93c5fd" /> {/* blue-300 */}
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
