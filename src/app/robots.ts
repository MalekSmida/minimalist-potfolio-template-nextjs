import { MetadataRoute } from 'next';
import { getRobotsData } from '@/services';

/**
 * Generate robots.txt for the website
 * This helps search engines understand which pages to crawl and which to ignore
 *
 * Data is fetched from the site configuration service for easy customization
 *
 * Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 *
 * @returns {MetadataRoute.Robots} A robots.txt file content
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  return await getRobotsData();
}
