import type { Metadata } from 'next';

// local files
import '../styles/globals.css';
import { Footer } from '@/components';
import { contactInfo, hyperlinks } from '@/data';

export const metadata: Metadata = {
  title: 'Malek Smida | Software Engineer | Profile and CV',
  description:
    'Malek Smida, a passionate, agile-minded Software Engineer who is scrupulous about the details. Manage full software development life-cycle of Mobile and Web apps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between">
        <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
          {children}
        </main>
        <Footer
          email={contactInfo?.Email}
          address={contactInfo?.Address}
          phone={contactInfo?.Phone}
          googleMapsURLForAddress={hyperlinks?.GoogleMapsURLForAddress}
          linkedinUrl={hyperlinks?.Linkedin}
          githubUrl={hyperlinks?.Github}
          githubRepo={hyperlinks?.GithubRepo}
        />
      </body>
    </html>
  );
}
