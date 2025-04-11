import { MetadataRoute } from 'next';
import { robotsData } from '@/data/siteConfigData';

/**
 * Generate robots.txt for the website
 * This helps search engines understand which pages to crawl and which to ignore
 *
 * Data is imported from the centralized siteConfigData for easy customization
 *
 * @returns {MetadataRoute.Robots} A robots.txt file content
 */
export default function robots(): MetadataRoute.Robots {
  return robotsData;
}
