import { fetchFromGist } from './gistService';
import { SiteConfigData, MetaData, Manifest, Robots, SitemapItem } from './types';

// Default values for when data can't be fetched
const defaultSiteConfig: SiteConfigData = {
  siteInfo: {
    title: 'Portfolio',
    name: 'Minimalist Portfolio',
    shortName: 'Portfolio',
    description: 'A minimalist portfolio template',
    baseUrl: 'https://example.com',
    author: 'Portfolio Owner',
    authorUrl: 'https://example.com',
    twitterHandle: '@portfolio',
    locale: 'en_US',
  },
  routes: [{ path: '', priority: 1 }],
  metaDataData: {
    title: 'Portfolio',
    description: 'A minimalist portfolio template',
    keywords: ['portfolio', 'minimalist'],
    authors: [{ name: 'Portfolio Owner', url: 'https://example.com' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      url: 'https://example.com',
      type: 'website',
      title: 'Portfolio',
      description: 'A minimalist portfolio template',
      siteName: 'Portfolio',
      locale: 'en_US',
      images: [
        {
          url: 'https://example.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Portfolio',
      description: 'A minimalist portfolio template',
      creator: '@portfolio',
      images: ['https://example.com/twitter-image.jpg'],
    },
    alternates: {
      canonical: 'https://example.com',
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
    description: 'A minimalist portfolio template',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  robotsData: {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  },
  sitemapData: [
    {
      url: 'https://example.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
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
