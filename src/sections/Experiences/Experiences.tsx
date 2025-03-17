// local files
import ExperienceCard, { IExperienceCard } from '@/components/ExperienceCard';

interface PropsExperiences {
  careerDescriptionList?: string[];
  experiences?: Array<IExperienceCard>;
}

const Experiences: React.FC<PropsExperiences> = ({ careerDescriptionList, experiences }) => {
  // break when empty props
  if (!careerDescriptionList?.length && !experiences?.length) return;

  return (
    <section className="relative my-8 w-full py-16">
      <div className="mb-8">
        <h2 className="my-4 text-3xl font-bold sm:text-4xl">Career</h2>

        {careerDescriptionList?.map((description) => (
          <p key={description} className="mt-1 text-gray-500">
            {description}
          </p>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        {experiences?.map((experience) => (
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
    </section>
  );
};

export default Experiences;
