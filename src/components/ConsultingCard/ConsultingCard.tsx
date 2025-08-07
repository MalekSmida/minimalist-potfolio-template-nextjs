'use client';

import { useState } from 'react';

// local files
import { Service } from '@/services';

/**
 * Consulting card shown in home page under Career section
 */
const ConsultingCard: React.FC<Service> = ({ _id, name, price, tasks, achievements }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className="relative cursor-pointer rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 dark:bg-gray-900 dark:shadow-gray-600/25"
      aria-labelledby={`consulting-title-${_id}`}
      data-testid="consulting-card"
      onClick={toggleExpand}
    >
      <span className="to-primary from-secondary absolute inset-x-0 top-0 h-1.5 rounded-t-lg bg-linear-to-r"></span>

      <div className="flex items-center justify-between">
        <h2 id={`consulting-title-${_id}`} className="mt-0.5 line-clamp-2 text-lg font-medium">
          {name}
        </h2>

        <div className="flex items-center gap-4">
          {price && <p className="text-xs">{price}</p>}

          <span
            className={`text-primary dark:text-secondary transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
          >
            &#8250; {/* Chevron icon */}
          </span>
        </div>
      </div>

      <ul className="mt-4 list-disc space-y-5 text-sm text-gray-700 dark:text-gray-200">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {isExpanded && (
        <div className="mt-6 rounded-lg bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Achievements:</p>
          <ul className="mt-4 list-disc space-y-5 text-sm text-gray-700 dark:text-gray-200">
            {achievements.map((achievement, index) => (
              <li key={index}>
                {achievement.title}
                <ul>
                  {achievement.achievementList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default ConsultingCard;
