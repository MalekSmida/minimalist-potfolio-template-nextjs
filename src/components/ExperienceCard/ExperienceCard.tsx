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
      <article className="relative rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6">
        <span className="absolute inset-x-0 top-0 h-2 rounded-t-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        {positions.map((position) => (
          <h3 key={position} className="mt-0.5 line-clamp-1 text-lg font-medium text-gray-900">
            {position}
          </h3>
        ))}

        <p className="mt-4 line-clamp-2 text-sm font-medium text-gray-600">
          {company ? `@${company}` : contractType}
        </p>

        <p className="mt-4 line-clamp-5 text-sm text-gray-600">{summary}</p>
      </article>
    </Link>
  );
};

export default ExperienceCard;
