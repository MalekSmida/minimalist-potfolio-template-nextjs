import Image from 'next/image';

// local files
import { ISkill } from './skills.types';

interface PropsSkillsBlock {
  title: string;
  skillList: Array<ISkill>;
}

const LevelTag: React.FC<{ level: ISkill['level'] }> = ({ level }) => {
  if (!['Advanced', 'Intermediate', 'Beginner'].includes(level)) return;

  const styleTagMapping = {
    Advanced: 'bg-rose-800 text-white ring-rose-800/10',
    Intermediate: 'bg-green-800 text-white ring-green-800/20',
    Beginner: 'bg-yellow-900 text-white ring-yellow-900/20',
  };

  return (
    <span
      className={`absolute top-0 right-0 rounded-bl-lg px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styleTagMapping[level]}`}
    >
      {level}
    </span>
  );
};

const SkillsBlock: React.FC<PropsSkillsBlock> = ({ title, skillList }) => {
  if (!skillList.length) return;

  return (
    <section className="mt-4 flex w-full flex-col">
      {title && (
        <h2 className="mt-4 mb-2 text-lg text-gray-600 sm:text-xl dark:text-gray-200">{title}</h2>
      )}
      <hr className="mb-4 h-0.5 w-full bg-gray-800 opacity-5" />
      <ul className="flex flex-wrap items-end gap-2 p-4 md:gap-4 lg:gap-6">
        {skillList?.map((skill, index) => (
          <li
            key={index} // using index is OK if the props are static
            className="group relative flex h-32 w-34 flex-col items-center justify-center rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800"
          >
            <Image
              src={skill.localPath}
              alt={skill.label}
              title={skill.label}
              height={45}
              width={45}
              loading="lazy"
              aria-label={skill.label}
              className="grayscale-70 transition-all duration-200 ease-in-out group-hover:grayscale-0"
            />
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              {skill.label}
            </p>
            <LevelTag level={skill.level} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsBlock;
