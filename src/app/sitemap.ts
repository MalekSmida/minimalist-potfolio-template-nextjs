import { MetadataRoute } from 'next';
import { sitemapData } from '@/data/siteConfigData';

/**
 * Generate sitemap for the website
 * This improves SEO by providing search engines with a map of all pages
 *
 * Data is imported from the centralized siteConfigData for easy customization
 *
 * @returns {MetadataRoute.Sitemap} A sitemap for the website
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapData;
}
