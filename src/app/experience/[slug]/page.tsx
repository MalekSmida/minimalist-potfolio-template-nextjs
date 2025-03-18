import { notFound } from 'next/navigation';
import Image from 'next/image';

// local files
import { NavHeader } from '@/components';
import { IExperience } from '@/components/ExperienceCard';
import { experiences } from '@/data';
import { INavButton } from '@/components/NavButton';

interface PropsPage {
  params: Promise<{ slug: string }>;
}

const navButtonList: INavButton[] = [
  { title: 'Back to main page', link: { id: '/', type: 'href' } },
];

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

  const {
    company,
    contractType,
    iconPath,
    iconHeight,
    iconWidth,
    positions,
    dates,
    contributions,
  } = currentExperience;
  const iconTitle = company || contractType;

  return (
    <>
      <NavHeader navButtonList={navButtonList} />
      <span className="relative h-48 w-full bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"></span>
      <section className="relative container mx-auto max-w-3xl py-20">
        <Image
          src={iconPath}
          alt={iconTitle}
          title={iconTitle}
          height={iconHeight}
          width={iconWidth}
          loading="lazy"
          role="img"
          aria-label={iconTitle}
          className="absolute -top-12 left-5"
        />

        <article className="mx-auto max-w-3xl p-5">
          <h1 className="mb-4 text-3xl font-semibold">
            {Array.isArray(positions) ? positions.join(', ') : positions}
          </h1>
          {company && (
            <strong className="border-indingo-50 text-primary rounded border border-gray-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium">
              @ {company}
            </strong>
          )}
          <div className="mt-8 flex flex-col border-l-2 border-gray-500 px-4 py-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl">{contractType}</h2>
            <p className="text-xs text-gray-500">{dates}</p>
          </div>
          <ul className="my-10 list-disc space-y-5 text-gray-700">
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Page;
