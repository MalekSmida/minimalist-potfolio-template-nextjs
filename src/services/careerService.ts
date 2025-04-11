import { fetchFromGist } from './gistService';
import { CareerData } from './types';

const fallbackData = {
  descriptionList: [],
  experienceList: [],
};

/**
 * Fetches the career section data from GitHub Gist
 */
export async function getCareerData(): Promise<CareerData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_CAREER_URL;

    if (!url) {
      console.error('Missing environment variable for Career section');
      return fallbackData; // Return fallback data if the URL is not set
    }

    return await fetchFromGist<CareerData>(url);
  } catch (error) {
    console.error('Error fetching career data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return fallbackData;
  }
}
