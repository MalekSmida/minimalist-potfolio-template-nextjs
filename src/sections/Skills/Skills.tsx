// local files
import { ISkill } from './skills.types';
import SkillsBlock from './SkillsBlock';

interface PropsSkills {
  frontendSkills?: Array<ISkill>;
  backendSkills?: Array<ISkill>;
  databaseSkills?: Array<ISkill>;
  cloudDevOpsSkills?: Array<ISkill>;
  otherSkills?: Array<ISkill>;
}

const Skills: React.FC<PropsSkills> = ({
  frontendSkills,
  backendSkills,
  databaseSkills,
  cloudDevOpsSkills,
  otherSkills,
}) => {
  return (
    <section
      className="my-10 flex w-full max-w-screen-xl flex-col justify-center rounded-md px-8"
      id="skills"
    >
      <h2 className="mt-8 mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Technical Expertise</h2>

      <div className="flex w-full flex-col">
        {frontendSkills?.length && (
          <SkillsBlock
            title="Frontend – Building Engaging User Interfaces"
            skills={frontendSkills}
          />
        )}
        {backendSkills?.length && (
          <SkillsBlock title="Backend – Crafting Robust APIs" skills={backendSkills} />
        )}
        {databaseSkills?.length && (
          <SkillsBlock
            title="Data Management – Database Design and Query Optimization"
            skills={databaseSkills}
          />
        )}
        {cloudDevOpsSkills?.length && (
          <SkillsBlock
            title="Cloud & DevOps – Scaling, Automating, and Deploying"
            skills={cloudDevOpsSkills}
          />
        )}
        {otherSkills?.length && (
          <SkillsBlock
            title="Additional Skills – Design, Payment Integration, and More"
            skills={otherSkills}
          />
        )}
      </div>
    </section>
  );
};

export default Skills;
