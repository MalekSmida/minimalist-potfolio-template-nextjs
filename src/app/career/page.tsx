// local files
import ExperienceCard from '@/components/ExperienceCard';
import { getCareerData } from '@/services';

const Career: React.FC = async () => {
  // Fetch data from Gists using services
  const { descriptionList, experienceList } = await getCareerData();

  // break when empty props
  if (!descriptionList?.length && !experienceList?.length) return;

  return (
    <section className="my-10 w-full px-8" aria-labelledby="career-heading" id="career">
      <div className="from-primary to-secondary flex flex-col justify-center gap-4 bg-gradient-to-r p-12 text-white">
        <h1 id="career-heading" className="text-2xl font-bold sm:text-3xl">
          Career
        </h1>

        {descriptionList?.map((description, index) => (
          <p className="w-full md:w-2/3 lg:w-1/2" key={index}>
            {description}
          </p>
        ))}
      </div>

      <ol className="relative mt-12 border-s border-gray-200 dark:border-gray-700">
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
