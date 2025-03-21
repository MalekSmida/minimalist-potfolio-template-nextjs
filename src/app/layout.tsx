import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Head from 'next/head';

// local files
import '../styles/globals.css';
import { BackToTopButton, Footer, ScrollProgressIndicatorBar } from '@/components';
import { contactSectionData, metaDataData } from '@/data';

export const metadata: Metadata = {
  ...metaDataData,
};

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = async ({ children }) => {
  // Get the nonce from the headers
  // Docs: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#reading-the-nonce
  const nextHeaders = await headers();
  const nonce = nextHeaders.get('x-nonce') || '';

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 
        index: Tells search engines to index the page and include it in search results.
        follow: Instructs search engines to follow the links on the page.
        */}
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
