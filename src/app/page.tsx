// local files
import { NavHeader } from '@/components';
import { INavButton } from '@/components/NavButton';
import { experiences, hyperlinks, profileInfo, skills } from '@/data';
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
        jobTitleList={profileInfo.JobTitleList}
        cvPdfLink={hyperlinks.CVPDF}
      />
      <Career careerDescriptionList={profileInfo.CareerDescriptionList} experiences={experiences} />
      <About
        name={profileInfo.Name}
        aboutDescription={profileInfo.AboutDescription}
        educationList={profileInfo.educationList}
        interestList={profileInfo.interestList}
      />
      <Skills skills={skills} />
    </>
  );
}
