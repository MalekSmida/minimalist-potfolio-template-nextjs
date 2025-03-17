import { notFound } from 'next/navigation';

// local files
import { NavHeader } from '@/components';
import { IExperience } from '@/components/ExperienceCard';
import { experiences } from '@/data';

interface PropsPage {
  params: Promise<{ slug: string }>;
}

const navButtonList = [{ title: 'Back to main page', anchorLink: '/' }];

const Page: React.FC<PropsPage> = async ({ params }) => {
  // In Nextjs 15 dynamic route segment is passed as Promise in the props when using App router
  // Docs: https://nextjs.org/docs/messages/sync-dynamic-apis
  const { slug } = await params;

  const findExperienceById = (experienceId: string): IExperience | undefined =>
    experiences.find((item) => item._id === experienceId);

  const currentExperience = findExperienceById(slug);

  // Handle case when experience is not found
  if (!currentExperience) {
    notFound();
  }

  return (
    <>
      <NavHeader navButtonList={navButtonList} />
      <span className="h-32 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"></span>
      <section className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-4 text-2xl font-bold">
          {Array.isArray(currentExperience.positions)
            ? currentExperience.positions.join(', ')
            : currentExperience.positions}
        </h1>
        {/* Add more experience details here */}
        {currentExperience.company && <h2 className="mb-3 text-xl">{currentExperience.company}</h2>}
        <p className="mb-6 text-gray-600">{currentExperience.dates}</p>

        {/* Render contributions if available */}
        {currentExperience.contributions && (
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">Key Contributions</h3>
            <ul className="list-disc space-y-2 pl-5">
              {currentExperience.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
