import type { Metadata, Viewport } from 'next';

// local files
import '../styles/globals.css';
import { BackToTopButton, Footer } from '@/components';
import { getContactData, getMetaData } from '@/services';
import { NavHeader } from '@/components';
import { INavButton } from '@/components/NavHeader';

/**
 * Application metadata
 *
 * This metadata is applied to all pages in the application
 * and includes SEO-related information such as:
 * - Title and description
 * - OpenGraph and Twitter card data
 * - Favicon and other icons
 * - Robots directives
 *
 * Imported from the centralized site configuration service which provides
 * a single source of truth for all site configuration information.
 */
export const generateMetadata = async (): Promise<Metadata> => {
  const metaData = await getMetaData();
  return { ...metaData };
};

/**
 * Viewport configuration
 *
 * Controls the viewport settings for all pages
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Force dynamic rendering
 *
 * This is used to force dynamic rendering for all pages
 * and is required for the application to work correctly
 * with the Content Security Policy (CSP)
 *
 * Docs: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#adding-a-nonce-with-middleware
 */
export const dynamic = 'force-dynamic';

/**
 * Root Layout Component
 *
 * This is the main layout component for the entire application.
 * It wraps all pages and provides common elements such as:
 * - HTML document structure
 * - Metadata and viewport settings
 * - Global UI elements (footer, scroll indicator, back-to-top button)
 * - Security features (CSP nonce handling)
 * - Accessibility features
 *
 * Features:
 * - Server Component: Runs on the server for improved performance
 * - Dark Mode Support: Theme classes applied to HTML element
 * - Content Security Policy: Uses nonce for secure inline scripts
 * - Responsive Layout: Mobile-first with appropriate viewport settings
 * - SEO Optimization: Proper metadata and robot directives
 * - Accessibility: ARIA landmarks, semantic HTML, and keyboard navigation
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to be rendered
 * @returns {JSX.Element} The complete HTML document structure
 */
const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Fetch contact data from Gist
  const contactData = await getContactData();

  const navButtonList: INavButton[] = [
    { title: 'About', page: '/' },
    { title: 'Consulting', page: '/consulting' },
    { title: 'Career', page: '/career' },
    { title: 'Contact', page: '/contact' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col items-center justify-between dark:bg-gray-900 dark:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <NavHeader navButtonList={navButtonList} />
        <main
          id="main-content"
          className="mx-auto flex w-full max-w-7xl flex-col items-center p-4 sm:p-6"
          role="main"
        >
          {/* content of page */}
          {children}
        </main>
        {/* Footer which includes social links */}
        <Footer
          linkedin={contactData.links?.linkedin}
          github={contactData.links?.github}
          stackoverflow={contactData.links?.stackoverflow}
          websiteRepo={contactData.links?.websiteRepo}
        />

        <BackToTopButton />
      </body>
    </html>
  );
};

export default RootLayout;
