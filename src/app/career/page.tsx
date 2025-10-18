// local files
import ExperienceCard from '@/components/ExperienceCard';
import { getCareerData } from '@/services';

// Force static generation for SSR
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

const Career: React.FC = async () => {
  // Fetch data from Gists using services
  const { descriptionList, experienceList } = await getCareerData();

  // break when empty props
  if (!descriptionList?.length && !experienceList?.length) return;

  return (
    <section className="my-10 w-full px-8" aria-labelledby="career-heading" id="career">
      <div className="from-primary to-secondary flex flex-col justify-center gap-4 rounded-lg bg-gradient-to-r px-6 py-12 text-white sm:px-8 lg:px-12">
        <h1 id="career-heading" className="text-2xl font-bold sm:text-3xl">
          My Career Journey
        </h1>

        {descriptionList?.map((description, index) => (
          <p className="w-full md:w-2/3 lg:w-1/2" key={index}>
            {description}
          </p>
        ))}
      </div>

      <ol className="relative mx-auto mt-12 max-w-4xl border-s border-gray-200 dark:border-gray-700">
        {experienceList?.map((experience) => (
          <ExperienceCard
            key={experience._id}
            _id={experience._id}
            contractType={experience.contractType}
            position={experience.position}
            company={experience.company}
            summary={experience.summary}
            contributions={experience.contributions}
            iconPath={experience.iconPath}
            iconHeight={experience.iconHeight}
            iconWidth={experience.iconWidth}
            dates={experience.dates}
          />
        ))}
      </ol>
    </section>
  );
};

export default Career;
