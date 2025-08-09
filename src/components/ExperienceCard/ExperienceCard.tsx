'use client';

import { useState } from 'react';

// local files
import { IExperience } from './experienceCard.types';
import Image from 'next/image';
import { useAnalytics } from '@/hooks';

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
  const { trackExperienceExpanded, trackExperienceCollapsed, trackCompanyLogoClick } = useAnalytics();

  const toggleExpand = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    
    // Track expansion/collapse events
    if (newExpandedState) {
      trackExperienceExpanded(company || 'Unknown', position);
    } else {
      trackExperienceCollapsed(company || 'Unknown', position);
    }
  };

  const handleLogoClick = () => {
    if (company) {
      trackCompanyLogoClick(company);
    }
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
        <h3
          className="text-lg font-semibold text-gray-900 dark:text-white"
          id={`experience-title-${_id}`}
        >
          {position}
        </h3>

        <div className="flex items-center justify-between gap-4">
          {/* Contract type and date */}
          <strong className="text-primary mx-2 rounded border border-gray-200 bg-yellow-50 px-1.5 py-0.5 text-xs font-normal">
            {contractType}
          </strong>
          {/* Company logo */}
          {company && (
            <Image
              src={iconPath}
              alt={company}
              title={company}
              height={iconHeight}
              width={iconWidth}
              loading="lazy"
              role="img"
              aria-label={company}
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleLogoClick}
            />
          )}
        </div>
      </div>

      {company && <p className="text-sm text-gray-600 dark:text-gray-200">@ {company}</p>}

      <p className="mt-4 text-base font-normal text-gray-600 dark:text-gray-200">{summary}</p>

      <button
        className="bg-primary mt-3 flex transform cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-2 text-left text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-102"
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
