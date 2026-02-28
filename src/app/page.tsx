// local files
import { getHomeData } from '@/services';
import { Presentation, Skills, About } from '@/sections';

// Force static generation for SSR
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

const Home: React.FC = async () => {
  // Fetch data from Gists using services
  const { name, jobTitle, yearsOfExperience, description, about, skills, consultingMention } =
    await getHomeData();

  return (
    <>
      <Presentation
        name={name}
        jobTitle={jobTitle}
        yearsOfExperience={yearsOfExperience}
        description={description}
        consultingMention={consultingMention}
      />
      <About blockList={about} />
      <Skills blockList={skills} />
    </>
  );
};

export default Home;
