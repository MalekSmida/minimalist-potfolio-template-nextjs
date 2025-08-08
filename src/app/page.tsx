// local files
import { getHomeData } from '@/services';
import { Presentation, Skills, About } from '@/sections';

const Home: React.FC = async () => {
  // Fetch data from Gists using services
  const { name, jobTitle, yearsOfExperience, description, about, skills } = await getHomeData();

  return (
    <>
      <Presentation
        name={name}
        jobTitle={jobTitle}
        yearsOfExperience={yearsOfExperience}
        description={description}
      />
      <About blockList={about} />
      <Skills blockList={skills} />
    </>
  );
};

export default Home;
