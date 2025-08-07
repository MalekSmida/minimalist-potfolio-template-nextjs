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
    <li
      className="my-16 ms-4"
      aria-labelledby={`experience-title-${_id}`}
      data-testid="experience-card"
    >
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="text-sm leading-none font-normal text-gray-600 dark:text-gray-400">
        {dates}
      </time>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h3
            className="text-lg font-semibold text-gray-900 dark:text-white"
            id={`experience-title-${_id}`}
          >
            {position}
          </h3>

          {/* Contract type and date */}
          <strong className="text-primary dark:bg-primary mx-2 rounded border border-gray-200 bg-yellow-50 px-1.5 py-0.5 text-xs font-normal dark:border-none dark:text-white">
            {contractType}
          </strong>
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Company name */}
          {company && (
            <>
              <p className="text-sm">@ {company}</p>
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
            </>
          )}
        </div>
      </div>

      <p className="mt-4 text-base font-normal text-gray-600 dark:text-gray-200">{summary}</p>

      <button
        className="mt-3 flex cursor-pointer items-center justify-between gap-2 rounded-lg bg-gray-100 px-3 py-1 text-left text-sm text-gray-700 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-labelledby={`experience-title-${_id}`}
        data-testid="experience-card"
        onClick={toggleExpand}
      >
        {/* <span className="font-medium transition-colors group-hover:text-white"> Achievements </span> */}
        Achievements
        <span
          className={`text-md transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
        >
          &#8250; {/* Chevron icon */}
        </span>
      </button>

      {/* Company contributions */}
      {isExpanded && (
        <ul className="mt-3 list-disc space-y-5 rounded-lg bg-gray-50 p-8 text-sm text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
          {contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ExperienceCard;
