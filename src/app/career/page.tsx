// local files
import ExperienceCard from '@/components/ExperienceCard';
import { getCareerData } from '@/services';

const Career: React.FC = async () => {
  // Fetch data from Gists using services
  const { descriptionList, experienceList } = await getCareerData();

  // break when empty props
  if (!descriptionList?.length && !experienceList?.length) return;

  return (
    <section className="relative my-10 w-full px-8" aria-labelledby="career-heading" id="career">
      <h1 id="career-heading" className="my-4 text-2xl font-bold sm:text-3xl">
        Career
      </h1>

      {descriptionList?.map((description, index) => (
        <p key={index} className="mt-1 text-gray-600 dark:text-gray-200">
          {description}
        </p>
      ))}

      {experienceList?.length && (
        <div className="mt-6 flex flex-col gap-6 md:mt-12 md:gap-8">
          {experienceList.map((experience) => (
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
        </div>
      )}
    </section>
  );
};

export default Career;
