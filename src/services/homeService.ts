import { fetchFromGist } from './gistService';
import { HomeData } from './types';

const fallbackData = {};

/**
 * Fetches the home section data from GitHub Gist
 */
export async function getHomeData(): Promise<HomeData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_HOME_URL;

    if (!url) {
      console.error('Missing environment variable for home section');
      return fallbackData;
    }

    return await fetchFromGist<HomeData>(url);
  } catch (error) {
    console.error('Error fetching home data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return fallbackData;
  }
}
