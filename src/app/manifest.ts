import { MetadataRoute } from 'next';
import { manifestData } from '@/data/siteConfigData';

/**
 * Web App Manifest
 *
 * This function generates a web app manifest for the application.
 * The manifest is a JSON file that provides information about the app
 * to browsers and mobile devices, enabling installation as a PWA.
 *
 * Data is imported from the centralized siteConfigData for easy customization
 *
 * @returns {MetadataRoute.Manifest} Application manifest
 */
export default function manifest(): MetadataRoute.Manifest {
  return manifestData;
}
