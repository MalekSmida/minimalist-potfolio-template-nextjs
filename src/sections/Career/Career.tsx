// local files
import ExperienceCard, { IExperienceCard } from '@/components/ExperienceCard';

interface PropsCareer {
  descriptionList?: string[];
  experienceList?: Array<IExperienceCard>;
}

const Career: React.FC<PropsCareer> = ({ descriptionList, experienceList }) => {
  // break when empty props
  if (!descriptionList?.length && !experienceList?.length) return;

  return (
    <section className="relative my-10 w-full px-8" aria-labelledby="career-heading" id="career">
      <h2 id="career-heading" className="my-4 text-3xl font-bold sm:text-4xl">
        Career
      </h2>

      {descriptionList?.map((description) => (
        <p key={description} className="mt-1 text-gray-600 dark:text-gray-200">
          {description}
        </p>
      ))}

      {experienceList?.length && (
        <div
          role="list"
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
        >
          {experienceList.map((experience) => (
            <ExperienceCard
              key={experience._id}
              _id={experience._id}
              contractType={experience.contractType}
              positions={experience.positions}
              company={experience.company}
              summary={experience.summary}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Career;
