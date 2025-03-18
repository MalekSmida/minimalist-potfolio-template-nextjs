// local files
import { AnimatedGuitarPlayerImage } from '@/components';

interface PropsAbout {
  functionalSkillsList: string[];
  educationList: string[];
  interestList: string[];
}

const AboutBlock: React.FC<{ title: string; itemList: string[] }> = ({ title, itemList }) => {
  if (!itemList.length) return;
  return (
    <>
      <h3 className="mt-7 text-xl font-bold">{title}</h3>
      <ul className="mt-3 list-disc space-y-1 text-gray-600">
        {itemList?.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
};

const About: React.FC<PropsAbout> = ({ functionalSkillsList, educationList, interestList }) => {
  return (
    <section className="my-10 grid grid-cols-1 lg:grid-cols-2" id="about">
      {/* Image section*/}
      <div className="flex w-full items-center justify-center px-8">
        <AnimatedGuitarPlayerImage />
      </div>

      {/* About me */}
      <div className="relative flex items-center bg-gray-50">
        <div className="xl:text-md p-8 text-sm md:px-16 md:py-8 lg:px-22 lg:py-16">
          <h2 className="mb-4 text-2xl font-bold sm:mb-10 sm:text-3xl">Hello again 👋</h2>

          <AboutBlock title="What I Bring to the Table" itemList={functionalSkillsList} />
          <AboutBlock title="Education & Continuous Learning" itemList={educationList} />
          <AboutBlock title="Personal Interests" itemList={interestList} />
        </div>
      </div>
    </section>
  );
};

export default About;
