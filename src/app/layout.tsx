import type { Metadata } from 'next';
import { headers } from 'next/headers';

// local files
import '../styles/globals.css';
import { BackToTopButton, Footer, ScrollProgressIndicatorBar } from '@/components';
import { contactSectionData } from '@/data';

export const metadata: Metadata = {
  title: 'Malek Smida | Senior Full-stack Engineer',
  description:
    'Malek Smida, a passionate, agile-minded Software Engineer who is scrupulous about the details. Manage full software development life-cycle of Mobile and Web apps',
};

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = async ({ children }) => {
  // Get the nonce from the headers
  const nextHeaders = await headers();
  const nonce = nextHeaders.get('x-nonce') || '';

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between dark:bg-gray-900 dark:text-white">
        <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
          <ScrollProgressIndicatorBar nonce={nonce} />
          {children}
        </main>
        <Footer
          email={contactSectionData.email}
          address={contactSectionData.address}
          phone={contactSectionData.phone}
          googleMapsLinkForAddress={contactSectionData.googleMapsLinkForAddress}
          linkedinLink={contactSectionData.linkedinLink}
          githubLink={contactSectionData.githubLink}
          githubRepoLink={contactSectionData.githubRepoLink}
        />
        <BackToTopButton />
      </body>
    </html>
  );
};

export default RootLayout;
