import { fetchFromGist } from './gistService';
import { SiteConfigData, MetaData, Manifest, Robots, SitemapItem } from './types';

// Default minimal values for when data can't be fetched
// Only includes the essential information to keep the app running and maintain basic SEO
const defaultSiteConfig: SiteConfigData = {
  siteInfo: {
    title: 'Portfolio',
    name: 'Minimalist Portfolio',
    shortName: 'Portfolio',
    description: 'A professional portfolio website',
    baseUrl: '/',
    author: 'Portfolio Owner',
    authorUrl: '/',
    twitterHandle: '',
    locale: 'en_US',
  },
  routes: [{ path: '', priority: 1 }],
  metaDataData: {
    title: 'Minimalist Portfolio',
    description: 'A professional portfolio website showcasing skills and experience',
    keywords: ['portfolio', 'professional'],
    authors: [{ name: 'Portfolio Owner', url: '/' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      url: '/',
      type: 'website',
      title: 'Minimalist Portfolio',
      description: 'A professional portfolio website',
      siteName: 'Portfolio',
      locale: 'en_US',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Portfolio',
      description: 'A professional portfolio website',
      creator: '',
      images: ['/twitter-image.jpg'],
    },
    alternates: {
      canonical: '/',
    },
    verification: {
      google: '',
    },
    other: {
      'application-name': 'Portfolio',
    },
  },
  manifestData: {
    name: 'Portfolio',
    short_name: 'Portfolio',
    description: 'A professional portfolio website',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64',
        type: 'image/x-icon',
      },
    ],
  },
  robotsData: {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: '/sitemap.xml',
  },
  sitemapData: [
    {
      url: '/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ],
};

/**
 * Fetches the site configuration data from GitHub Gist
 */
export async function getSiteConfigData(): Promise<SiteConfigData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_SITE_CONFIG_URL;

    if (!url) {
      console.error('Missing environment variable for site config');
      return defaultSiteConfig;
    }

    return await fetchFromGist<SiteConfigData>(url);
  } catch (error) {
    console.error('Error fetching site configuration data:', error);
    return defaultSiteConfig;
  }
}

/**
 * Extracts and returns the metadata from site config
 */
export async function getMetaData(): Promise<MetaData> {
  try {
    const data = await getSiteConfigData();
    return data.metaDataData;
  } catch (error) {
    console.error('Error getting metadata:', error);
    return defaultSiteConfig.metaDataData;
  }
}

/**
 * Extracts and returns the manifest data from site config
 */
export async function getManifestData(): Promise<Manifest> {
  try {
    const data = await getSiteConfigData();
    return data.manifestData;
  } catch (error) {
    console.error('Error getting manifest data:', error);
    return defaultSiteConfig.manifestData;
  }
}

/**
 * Extracts and returns the robots data from site config
 */
export async function getRobotsData(): Promise<Robots> {
  try {
    const data = await getSiteConfigData();
    return data.robotsData;
  } catch (error) {
    console.error('Error getting robots data:', error);
    return defaultSiteConfig.robotsData;
  }
}

/**
 * Extracts and returns the sitemap data from site config
 */
export async function getSitemapData(): Promise<SitemapItem[]> {
  try {
    const data = await getSiteConfigData();

    // Ensure the data matches the expected type by transforming the result
    return data.sitemapData.map((item) => ({
      url: item.url,
      lastModified: item.lastModified,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    }));
  } catch (error) {
    console.error('Error getting sitemap data:', error);
    return defaultSiteConfig.sitemapData;
  }
}
