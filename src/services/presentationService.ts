import { fetchFromGist } from './gistService';
import { PresentationData } from './types';

const fallbackData = {};

/**
 * Fetches the presentation section data from GitHub Gist
 */
export async function getPresentationData(): Promise<PresentationData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_PRESENTATION_URL;

    if (!url) {
      console.error('Missing environment variable for Presentation section');
      // Return fallback data instead of throwing to prevent page from crashing
      return fallbackData;
    }

    return await fetchFromGist<PresentationData>(url);
  } catch (error) {
    console.error('Error fetching presentation data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return fallbackData;
  }
}
