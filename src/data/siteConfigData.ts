/**
 * Site Configuration Data
 *
 * This file contains all configuration related to the site's metadata,
 * manifest, robots.txt and sitemap. Centralizing this data makes it easy
 * to update the site information in one place.
 */

// Base site information (shared across all configurations)
const siteInfo = {
  title: 'Malek Smida | Senior Full-stack Engineer',
  name: 'Malek Smida Portfolio',
  shortName: 'Malek Smida',
  description:
    'Malek Smida, a passionate, agile-minded Software Engineer who is scrupulous about the details. Manage full software development life-cycle of Mobile and Web apps',
  baseUrl: 'https://www.maleksmida.com',
  author: 'Malek Smida',
  authorUrl: 'https://www.linkedin.com/in/maleksmida/',
  twitterHandle: '@maleksmida',
  locale: 'en_US',
};

// Metadata configuration for Next.js
export const metaDataData = {
  title: siteInfo.title,
  description: siteInfo.description,
  keywords: [
    'Full-stack Engineer',
    'Web Developer',
    'Software Engineer',
    'Tech Lead',
    'Senior Software Engineer',
    'Javascript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
  ],
  authors: [{ name: siteInfo.author, url: siteInfo.authorUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    url: siteInfo.baseUrl,
    type: 'website',
    title: siteInfo.title,
    description: siteInfo.description,
    siteName: siteInfo.name,
    locale: siteInfo.locale,
    images: [
      {
        url: `${siteInfo.baseUrl}/gradient-background.webp`,
        width: 1200,
        height: 630,
        alt: siteInfo.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteInfo.title,
    description: siteInfo.description,
    creator: siteInfo.twitterHandle,
    images: [`${siteInfo.baseUrl}/gradient-background.webp`],
  },
  alternates: {
    canonical: siteInfo.baseUrl.replace('www.', ''), // preferred page without www
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code if available
  },
  // Schema.org structured data
  other: {
    'application-name': siteInfo.name,
  },
};

// Available routes in the application
const routes = [
  {
    path: '',
    priority: 1,
  },
  {
    path: '/experience',
    priority: 0.8,
  },
];

// Manifest configuration for PWA
export const manifestData = {
  name: siteInfo.name,
  short_name: siteInfo.shortName,
  description: siteInfo.description,
  start_url: '/',
  display: 'standalone' as 'standalone' | 'fullscreen' | 'minimal-ui' | 'browser',
  background_color: '#ffffff',
  theme_color: '#000000',
  icons: [
    {
      src: '/favicon.ico',
      sizes: 'any',
      type: 'image/x-icon',
    },
    {
      src: '/web-app-manifest-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/web-app-manifest-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};

// Robots.txt configuration
export const robotsData = {
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${siteInfo.baseUrl}/sitemap.xml`,
};

// Sitemap configuration
export const sitemapData = routes.map((route) => ({
  url: `${siteInfo.baseUrl}${route.path}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: route.priority,
}));

// Complete site configuration
const siteConfigData = {
  siteInfo,
  routes,
  metaDataData,
  manifestData,
  robotsData,
  sitemapData,
};

export default siteConfigData;
