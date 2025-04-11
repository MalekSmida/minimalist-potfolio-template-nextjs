import { Suspense, lazy } from 'react';

// local files
import { NavHeader } from '@/components';
import { INavButton } from '@/components/NavButton';
import {
  aboutSectionData,
  careerSectionData,
  presentationSectionData,
  skillsSectionData,
} from '@/data';

// Dynamic imports with lazy loading
const Presentation = lazy(() => import('@/sections/Presentation'));
const Career = lazy(() => import('@/sections/Career'));
const About = lazy(() => import('@/sections/About'));
const Skills = lazy(() => import('@/sections/Skills'));

// Constants
const navButtonList: INavButton[] = [
  { title: 'Career', link: { id: 'career', type: 'anchorLink' } },
  { title: 'About', link: { id: 'about', type: 'anchorLink' } },
  { title: 'Skills', link: { id: 'skills', type: 'anchorLink' } },
  { title: 'Contact', link: { id: 'contact', type: 'anchorLink' } },
];

// Loading fallback component
const SectionSkeleton = () => (
  <div className="w-full animate-pulse space-y-4 py-8">
    <div className="h-10 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
    <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
    <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-700"></div>
  </div>
);

/**
 * Home Page Component
 *
 * Uses React.Suspense for code-splitting and progressive loading
 * Each section is lazy-loaded to improve initial page load time
 */
const Home: React.FC = () => {
  return (
    <>
      {/* 1- Navigation bar/header */}
      <NavHeader navButtonList={navButtonList} />

      {/* Presentation section */}
      <Suspense fallback={<SectionSkeleton />}>
        <Presentation
          name={presentationSectionData.name}
          jobTitle={presentationSectionData.jobTitle}
          yearsOfExperience={presentationSectionData.yearsOfExperience}
          description={presentationSectionData.description}
          cvPdfLink={presentationSectionData.cvPdfLink}
        />
      </Suspense>

      {/* Career/experiences section */}
      <Suspense fallback={<SectionSkeleton />}>
        <Career
          descriptionList={careerSectionData.descriptionList}
          experienceList={careerSectionData.experienceList}
        />
      </Suspense>

      {/* About me section which includes function skills too */}
      <Suspense fallback={<SectionSkeleton />}>
        <About blockList={aboutSectionData} />
      </Suspense>

      {/* Technical skills section */}
      <Suspense fallback={<SectionSkeleton />}>
        <Skills blockList={skillsSectionData} />
      </Suspense>
    </>
  );
};

export default Home;
