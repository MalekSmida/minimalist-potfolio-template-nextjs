'use client';

import { useState } from 'react';

// local files
import { Service } from '@/services';
import ButtonLink from '../ButtonLink';
import { useAnalytics } from '@/hooks';

/**
 * Consulting card component for displaying service offerings
 *
 * Features:
 * - Expandable sections for tasks and achievements
 * - CTA button linking to contact page
 * - Responsive design with hover effects
 * - Dark mode support
 * - Accessibility compliant
 */
const ConsultingCard: React.FC<Service> = ({ _id, name, prices, tasks, achievements }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { trackServiceCardInteraction } = useAnalytics();

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);

    // Track expansion/collapse events
    trackServiceCardInteraction(
      name,
      newExpandedState ? 'expand_achievements' : 'collapse_achievements',
    );
  };

  const handleGetStartedClick = () => {
    trackServiceCardInteraction(name, 'get_started_clicked');
  };

  return (
    <article
      className="relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-600/10 dark:hover:border-gray-700"
      aria-labelledby={`consulting-title-${_id}`}
      data-testid="consulting-card"
    >
      {/* Top accent bar */}
      <div className="to-primary from-secondary absolute inset-x-0 top-0 h-1 bg-gradient-to-r"></div>

      <div className="p-6 sm:p-8">
        {/* Header section */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2
              id={`consulting-title-${_id}`}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              {name}
            </h2>
            {prices?.map((price, idx) => (
              <p key={idx} className="text-primary dark:text-secondary mt-2 text-sm font-semibold">
                {price}
              </p>
            ))}
          </div>
        </div>

        {/* Tasks section */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
            What&apos;s Included
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="text-primary dark:text-secondary mt-1 h-4 w-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-sm">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA and Expand Button */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div onClick={handleGetStartedClick}>
            <ButtonLink
              link="/contact"
              label="Get Started"
              ariaLabel="Link to contact page"
              isNavigation
              isPrimary
            />
          </div>

          <button
            onClick={toggleExpand}
            className="flex cursor-pointer items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Hide' : 'Show'} achievements for ${name}`}
          >
            View Achievements
            <svg
              className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Achievements section */}
        {isExpanded && (
          <div className="animate-fadeIn mt-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h4 className="mb-4 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Previous Achievements
            </h4>
            <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
              {achievements.map((achievement, index) => (
                <li key={index}>
                  <h5 className="font-medium text-gray-900 dark:text-white">{achievement.title}</h5>
                  <ul className="mt-2 space-y-1 pl-4">
                    {achievement.achievementList.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary dark:text-secondary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default ConsultingCard;
