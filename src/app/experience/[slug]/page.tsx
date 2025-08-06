import { notFound } from 'next/navigation';
import Image from 'next/image';

// local files
import { IExperience } from '@/components/ExperienceCard';
import { getCareerData } from '@/services';

interface PropsExperience {
  params: Promise<{ slug: string }>;
}

const Experience: React.FC<PropsExperience> = async ({ params }) => {
  // In Nextjs 15 dynamic route segment is passed as Promise in the props when using App router
  // Docs: https://nextjs.org/docs/messages/sync-dynamic-apis
  const { slug } = await params;

  // Fetch career data
  const careerData = await getCareerData();

  const findExperienceById = (experienceId: string): IExperience | undefined =>
    careerData.experienceList.find((item) => item._id === experienceId);

  const currentExperience = findExperienceById(slug);

  // Handle case when experience is not found
  if (!currentExperience) {
    notFound();
  }

  // Extract data
  const { company, contractType, iconPath, iconHeight, iconWidth, position, dates, contributions } =
    currentExperience;

  // setting iconTitle
  const iconTitle = company || contractType;

  return (
    <>
      <span className="from-primary to-secondary relative h-48 w-screen bg-gradient-to-r"></span>
      <section className="relative container mx-auto max-w-3xl py-20">
        {/* Company logo */}
        <Image
          src={iconPath}
          alt={iconTitle}
          title={iconTitle}
          height={iconHeight}
          width={iconWidth}
          loading="lazy"
          role="img"
          aria-label={iconTitle}
          className="absolute -top-12 left-5"
        />

        <article className="mx-auto max-w-3xl p-5">
          {/* Position */}
          <h1 className="mb-4 text-3xl font-semibold">{position}</h1>

          {/* Company name */}
          {company && (
            <strong className="text-primary dark:bg-primary rounded border border-gray-200 bg-indigo-50 px-3 py-1.5 text-sm font-normal dark:border-none dark:text-white">
              @ {company}
            </strong>
          )}

          {/* Contract type and date */}
          <div className="mt-8 flex flex-col border-l-2 border-gray-500 px-4 py-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl">{contractType}</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">{dates}</p>
          </div>

          {/* Company contributions */}
          <ul className="my-10 list-disc space-y-5 text-gray-700 dark:text-gray-200">
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Experience;
