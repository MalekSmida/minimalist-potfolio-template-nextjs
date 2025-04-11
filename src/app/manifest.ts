import { MetadataRoute } from 'next';
import { getManifestData } from '@/services';

/**
 * Web App Manifest
 *
 * This function generates a web app manifest for the application.
 * The manifest is a JSON file that provides information about the app
 * to browsers and mobile devices, enabling installation as a PWA.
 *
 * Data is fetched from the site configuration service for easy customization
 *
 * @returns {MetadataRoute.Manifest} Application manifest
 */
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return await getManifestData();
}
