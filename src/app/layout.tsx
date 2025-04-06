import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Head from 'next/head';

// local files
import '../styles/globals.css';
import { BackToTopButton, Footer, ScrollProgressIndicatorBar } from '@/components';
import { contactSectionData, metaDataData } from '@/data';

/**
 * Application metadata
 *
 * This metadata is applied to all pages in the application
 * and includes SEO-related information such as:
 * - Title and description
 * - OpenGraph and Twitter card data
 * - Favicon and other icons
 *
 * Imported from the metaDataData object in @/data
 */
export const metadata: Metadata = {
  ...metaDataData,
};

/**
 * Root Layout Component
 *
 * This is the main layout component for the entire application.
 * It wraps all pages and provides common elements such as:
 * - HTML document structure
 * - Metadata and viewport settings
 * - Global UI elements (footer, scroll indicator, back-to-top button)
 * - Security features (CSP nonce handling)
 *
 * Features:
 * - Server Component: Runs on the server for improved performance
 * - Dark Mode Support: Theme classes applied to HTML element
 * - Content Security Policy: Uses nonce for secure inline scripts
 * - Responsive Layout: Mobile-first with appropriate viewport settings
 * - SEO Optimization: Proper metadata and robot directives
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to be rendered
 * @returns {JSX.Element} The complete HTML document structure
 */
const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = async ({ children }) => {
  // Get the nonce from the headers.
  // The nonce is a unique, random string. Used with CSP to selectively allow certain inline scripts or styles to execute, bypassing strict CSP directives.
  // If not using nonce we would added 'unsafe-eval' and 'unsafe-inline' in script-src of CSP Header.
  // Docs: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#nonces
  const nextHeaders = await headers();
  const nonce = nextHeaders.get('x-nonce') || ''; // set default value to "".

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 
        For robots:
        - index: Tells search engines to index the page and include it in search results.
        - follow: Instructs search engines to follow the links on the page.
        */}
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex min-h-screen flex-col items-center justify-between dark:bg-gray-900 dark:text-white">
        <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
          {/* Top scroll bar animation  */}
          <ScrollProgressIndicatorBar nonce={nonce} />
          {/* content of page */}
          {children}
        </main>
        {/* Footer which includes contact info */}
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
