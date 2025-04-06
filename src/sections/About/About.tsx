// local files
import { AnimatedGuitarPlayerImage } from '@/components';

/**
 * Props for the About section component
 * @property {Array<{title: string, aboutList: string[]}>} blockList - Array of content blocks with titles and list items
 */
interface PropsAbout {
  blockList: Array<{ title: string; aboutList: string[] }>;
}

/**
 * AboutBlock Component
 *
 * Renders a section of the About component with a title and list of items.
 * This is a sub-component used internally by the About component.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the about block
 * @param {string[]} props.itemList - List of items/points to display as bullet points
 * @returns {JSX.Element|undefined} Rendered AboutBlock or undefined if no items
 */
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

/**
 * About Section Component
 *
 * Renders the "About Me" section of the portfolio with an animated image
 * and content blocks containing personal information.
 *
 * Features:
 * - Two-column layout on larger screens (image | content)
 * - Responsive design (stacks on mobile)
 * - Multiple content blocks with titles and bullet points
 * - Dark mode support
 *
 * Note: The component will not render if blockList is empty
 *
 * @param {PropsAbout} props - Component props
 * @returns {JSX.Element|undefined} Rendered About section or undefined if no content
 *
 * @example
 * import { About } from '@/sections';
 *
 * const aboutData = [
 *   {
 *     title: "Skills",
 *     aboutList: ["JavaScript", "React", "Next.js"]
 *   },
 *   {
 *     title: "Interests",
 *     aboutList: ["Web Development", "UI/UX Design"]
 *   }
 * ];
 *
 * <About blockList={aboutData} />
 */
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
