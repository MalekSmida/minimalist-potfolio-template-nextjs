// local files
import ExperienceCard, { IExperienceCard } from '@/components/ExperienceCard';

interface PropsExperiences {
  careerDescription?: string[];
  experiences?: Array<IExperienceCard>;
}

const Experiences: React.FC<PropsExperiences> = ({ careerDescription, experiences }) => {
  // break when empty props
  if (!careerDescription?.length && !experiences?.length) return;

  return (
    <section className="relative my-8 w-full py-16">
      <div className="mb-8">
        <h2 className="my-4 text-3xl font-bold sm:text-4xl">Career</h2>

        {careerDescription?.map((item) => (
          <p key={item} className="mt-1 text-gray-500">
            {item}
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
