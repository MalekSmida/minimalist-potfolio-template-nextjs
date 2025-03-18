import Link from 'next/link';

// local files
import { IExperienceCard } from './experienceCard.types';

/**
 * Experience card shown in home under Career section
 */
const ExperienceCard: React.FC<IExperienceCard> = ({
  _id,
  contractType,
  positions,
  company,
  summary,
}) => {
  return (
    <Link href={`/experience/${_id}`}>
      <article
        className="relative rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6"
        role="listitem"
        aria-labelledby={`experience-title-${_id}`}
      >
        <span className="absolute inset-x-0 top-0 h-2 rounded-t-lg bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"></span>
        {positions.map((position) => (
          <h3
            key={position}
            id={`experience-title-${_id}`}
            className="mt-0.5 line-clamp-1 text-lg font-medium text-gray-900"
          >
            {position}
          </h3>
        ))}

        {/* It will check if your experience is within a company else it will renders contract type */}
        <p className="mt-4 line-clamp-2 font-medium text-gray-600">
          {company ? `@${company}` : contractType}
        </p>

        <p className="mt-4 line-clamp-5 text-sm text-gray-600">{summary}</p>
      </article>
    </Link>
  );
};

export default ExperienceCard;
