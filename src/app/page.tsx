// local files
import { NavHeader } from '@/components';
import { INavButton } from '@/components/NavButton';
import {
  backendSkills,
  cloudDevOpsSkills,
  databaseSkills,
  experiences,
  frontendSkills,
  hyperlinks,
  otherSkills,
  profileInfo,
} from '@/data';
import { About, Career, Presentation, Skills } from '@/sections';

const navButtonList: INavButton[] = [
  { title: 'Career', link: { id: 'career', type: 'anchorLink' } },
  { title: 'About', link: { id: 'about', type: 'anchorLink' } },
  { title: 'Skills', link: { id: 'skills', type: 'anchorLink' } },
  { title: 'Contact', link: { id: 'contact', type: 'anchorLink' } },
];

export default function Home() {
  return (
    <>
      <NavHeader navButtonList={navButtonList} />
      <Presentation
        name={profileInfo.Name}
        jobTitle={profileInfo.JobTitle}
        yearsOfExperience={profileInfo.YearsOfExperience}
        description={profileInfo.PresentationDescription}
        cvPdfLink={hyperlinks.CVPDF}
      />
      <Career careerDescriptionList={profileInfo.CareerDescriptionList} experiences={experiences} />
      <About
        functionalSkillsList={profileInfo.FunctionalSkillsList}
        educationList={profileInfo.EducationList}
        interestList={profileInfo.InterestList}
      />
      <Skills
        frontendSkills={frontendSkills}
        backendSkills={backendSkills}
        databaseSkills={databaseSkills}
        cloudDevOpsSkills={cloudDevOpsSkills}
        otherSkills={otherSkills}
      />
    </>
  );
}
