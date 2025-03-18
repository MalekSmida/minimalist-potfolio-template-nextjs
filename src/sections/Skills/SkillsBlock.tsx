import Image from 'next/image';

// local files
import { ISkill } from './skills.types';

interface PropsSkills {
  title: string;
  skills: Array<ISkill>;
}

const LevelTag: React.FC<{ level: ISkill['level'] }> = ({ level }) => {
  if (!['Advanced', 'Intermediate', 'Beginner'].includes(level)) return;

  const styleTagMapping = {
    Advanced: 'bg-pink-50 text-pink-600 ring-pink-600/10',
    Intermediate: 'bg-green-50 text-green-600 ring-green-600/20',
    Beginner: 'bg-yellow-50 text-yellow-600 ring-yellow-600/20',
  };

  return (
    <span
      className={`absolute top-0 right-0 inline-flex items-center rounded-md px-2 pt-0.5 pb-1 text-xs font-medium ring-1 ring-inset ${styleTagMapping[level]}`}
    >
      {level}
    </span>
  );
};

const SkillsBlock: React.FC<PropsSkills> = ({ title, skills }) => {
  return (
    <div className="flex w-full flex-col">
      <h3 className="my-2 text-lg font-medium text-gray-900 md:my-4">{title}</h3>
      <div className="flex flex-wrap items-end gap-2 p-4 md:gap-4 lg:gap-6">
        {skills?.map((skill) => (
          <div
            key={skill.label}
            className="group relative flex h-32 w-34 flex-col items-center justify-center rounded-md bg-gray-50 p-4 text-center"
          >
            <Image
              src={skill.localPath}
              alt={skill.label}
              title={skill.label}
              height={45}
              width={45}
              loading="lazy"
              role="img"
              aria-label={skill.label}
              key={skill.label}
              className="grayscale-70 transition-all duration-200 ease-in-out group-hover:grayscale-0"
            />
            <p className="mt-2 text-xs font-medium text-gray-600 md:text-sm">{skill.label}</p>
            <LevelTag level={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBlock;
