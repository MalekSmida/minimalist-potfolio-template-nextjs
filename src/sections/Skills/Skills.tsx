import Image from 'next/image';

// local files
import { ISkill } from './skills.types';

interface PropsSkills {
  skills: Array<ISkill>;
}

const Skills: React.FC<PropsSkills> = ({ skills }) => {
  return (
    <section className="w-full">
      <div className="my-12 flex max-w-screen-xl flex-col items-center justify-center rounded-md p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Skills</h2>

        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-8 lg:gap-12">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="opacity-70 grayscale-70 transition-all duration-200 ease-in-out hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={skill.localPath}
                alt={skill.label}
                title={skill.label}
                height={50}
                width={50}
                loading="lazy"
                role="img"
                aria-label={skill.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
