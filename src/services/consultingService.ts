import { fetchFromGist } from './gistService';
import { ConsultingData } from './types';

const fallbackData = {};

/**
 * Fetches the consulting section data from GitHub Gist
 */
export async function getConsultingData(): Promise<ConsultingData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_CONSULTING_URL;

    if (!url) {
      console.error('Missing environment variable for consulting section');
      return fallbackData;
    }

    return await fetchFromGist<ConsultingData>(url);
  } catch (error) {
    console.error('Error fetching consulting data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return fallbackData;
  }
}
