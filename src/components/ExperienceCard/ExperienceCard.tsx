'use client';

import { useState } from 'react';

// local files
import { IExperience } from './experienceCard.types';
import Image from 'next/image';

/**
 * Experience card shown in home page under Career section
 */
const ExperienceCard: React.FC<IExperience> = ({
  _id,
  contractType,
  position,
  company,
  summary,
  contributions,
  dates,
  iconPath,
  iconWidth,
  iconHeight,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className="relative cursor-pointer rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 dark:bg-gray-900 dark:shadow-gray-600/25"
      aria-labelledby={`experience-title-${_id}`}
      data-testid="experience-card"
      onClick={toggleExpand}
    >
      <span className="to-primary from-secondary absolute inset-x-0 top-0 h-1.5 rounded-t-lg bg-linear-to-r"></span>

      <div className="flex items-center justify-between">
        <h2 id={`experience-title-${_id}`} className="mt-0.5 line-clamp-2 text-lg font-medium">
          {position}
        </h2>

        <div className="flex items-center gap-4">
          {/* Company name */}
          {company && (
            <div className="flex items-center gap-2">
              <p className="text-xs">@ {company}</p>
              {/* Company logo */}
              <Image
                src={iconPath}
                alt={company}
                title={company}
                height={iconHeight}
                width={iconWidth}
                loading="lazy"
                role="img"
                aria-label={company}
                // className="absolute top-5 right-12"
              />
            </div>
          )}

          <span
            className={`text-primary dark:text-secondary transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
          >
            &#8250; {/* Chevron icon */}
          </span>
        </div>
      </div>

      {/* Contract type and date */}
      <div className="mt-4 flex items-center gap-4">
        <p className="text-md text-gray-500 dark:text-gray-400">{dates}</p>

        <strong className="text-primary dark:bg-primary bg-secondary rounded border border-gray-200 px-1.5 py-0.5 text-xs font-normal dark:border-none dark:text-white">
          {contractType}
        </strong>
      </div>

      <p className="mt-4 line-clamp-5 text-sm text-gray-600 dark:text-gray-200">{summary}</p>

      {/* Company contributions */}
      {isExpanded && (
        <div className="mt-6 rounded-lg bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Achievements:</p>
          <ul className="mt-4 list-disc space-y-5 text-sm text-gray-700 dark:text-gray-200">
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default ExperienceCard;
