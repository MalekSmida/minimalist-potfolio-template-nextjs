// local files
import { NavHeader } from '@/components';
import { INavButton } from '@/components/NavButton';
import {
  aboutSectionData,
  careerSectionData,
  presentationSectionData,
  skillsSectionData,
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
        name={presentationSectionData.name}
        jobTitle={presentationSectionData.jobTitle}
        yearsOfExperience={presentationSectionData.yearsOfExperience}
        description={presentationSectionData.description}
        cvPdfLink={presentationSectionData.cvPdfLink}
      />
      <Career
        descriptionList={careerSectionData.descriptionList}
        experienceList={careerSectionData.experienceList}
      />
      <About blockList={aboutSectionData} />
      <Skills blockList={skillsSectionData} />
    </>
  );
}
