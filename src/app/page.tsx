// local files
import { NavHeader } from '@/components';
import { hyperlinks, profileInfo } from '@/data';
import { About, Experiences, Presentation, Skills } from '@/sections';

const navButtonList = [
  { title: 'Career', anchorLink: 'dummy anchor link 1' },
  { title: 'About', anchorLink: 'dummy anchor link 2' },
  { title: 'Clients', anchorLink: 'dummy anchor link 3' },
  { title: 'Skills', anchorLink: 'dummy anchor link 4' },
  { title: 'Contact', anchorLink: 'dummy anchor link 5' },
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
      <Experiences />
      <About />
      <Skills />
    </>
  );
}
