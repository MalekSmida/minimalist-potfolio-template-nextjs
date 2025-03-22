// local files
import { AnimatedGuitarPlayerImage } from '@/components';

interface PropsAbout {
  blockList: Array<{ title: string; aboutList: string[] }>;
}

const AboutBlock: React.FC<{ title: string; itemList: string[] }> = ({ title, itemList }) => {
  if (!itemList.length) return;
  return (
    <>
      {title && <h2 className="mt-7 text-lg sm:text-xl">{title}</h2>}
      <ul className="mt-3 list-disc space-y-1 text-gray-600 dark:text-gray-200">
        {itemList?.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  );
};

const About: React.FC<PropsAbout> = ({ blockList }) => {
  if (!blockList.length) return;

  return (
    <section className="my-10 grid grid-cols-1 lg:grid-cols-2" id="about">
      {/* Image section*/}
      <div className="flex w-full items-center justify-center px-8">
        <AnimatedGuitarPlayerImage />
      </div>

      {/* About me */}
      <article className="xl:text-md bg-gray-50 p-8 text-sm md:px-16 md:py-8 lg:px-22 lg:py-16 dark:bg-gray-800">
        <h1 className="mb-4 text-2xl font-bold sm:mb-10 sm:text-3xl">Hello again 👋</h1>

        {blockList.map((block, index) => (
          <AboutBlock key={index} title={block.title} itemList={block.aboutList} />
        ))}
      </article>
    </section>
  );
};

export default About;
