import { MetadataRoute } from 'next';
import { getSitemapData } from '@/services';

/**
 * Generate sitemap for the website
 * This improves SEO by providing search engines with a map of all pages
 *
 * Data is fetched from the site configuration service for easy customization
 *
 * Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 *
 * @returns {MetadataRoute.Sitemap} A sitemap for the website
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return await getSitemapData();
}
