// local files
import { NavHeader } from '@/components';
import { experiences, hyperlinks, profileInfo } from '@/data';
import { About, Experiences, Presentation, Skills } from '@/sections';

const navButtonList = [
  { title: 'Career', anchorLink: 'anchor link 1' },
  { title: 'About', anchorLink: 'anchor link 2' },
  { title: 'Clients', anchorLink: 'anchor link 3' },
  { title: 'Skills', anchorLink: 'anchor link 4' },
  { title: 'Contact', anchorLink: 'anchor link 5' },
];

export default function Home() {
  return (
    <>
      <NavHeader navButtonList={navButtonList} />
      <Presentation
        name={profileInfo?.Name}
        jobTitleList={profileInfo.JobTitleList}
        cvPdfLink={hyperlinks.CVPDF}
      />
      <Experiences careerDescription={profileInfo.CareerDescription} experiences={experiences} />
      <About />
      <Skills />
    </>
  );
}
