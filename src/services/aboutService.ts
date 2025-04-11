import { fetchFromGist } from './gistService';
import { AboutData } from './types';

/**
 * Fetches the about section data from GitHub Gist
 */
export async function getAboutData(): Promise<AboutData[]> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_ABOUT_URL;

    if (!url) {
      console.error('Missing environment variable for About section');
      return [];
    }

    const data = await fetchFromGist<Partial<AboutData[]>>(url);

    // Check if the data is an array and has at least one item
    if (!Array.isArray(data) || data.length === 0) {
      return []; // Return an empty array if the data is not valid
    }

    return data as AboutData[]; // Cast to AboutData[]
  } catch (error) {
    console.error('Error fetching about data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return [];
  }
}
