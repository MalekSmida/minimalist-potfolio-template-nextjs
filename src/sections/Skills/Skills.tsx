// local files
import { ISkill } from './skills.types';
import SkillsBlock from './SkillsBlock';

interface PropsSkills {
  blockList: Array<{ title: string; skillList: Array<ISkill> }>;
}

const Skills: React.FC<PropsSkills> = ({ blockList }) => {
  if (!blockList.length) return;

  return (
    <section
      className="my-10 flex w-full max-w-4xl flex-col items-center justify-center rounded-md px-8"
      id="skills"
    >
      <h1 className="mt-8 mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Technical Expertise</h1>

      <div className="flex w-full flex-col">
        {blockList.map((skillSection, index) => (
          <SkillsBlock key={index} title={skillSection.title} skillList={skillSection.skillList} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
