import { fetchFromGist } from './gistService';
import { ContactData } from './types';

const fallbackData = {};

/**
 * Fetches the contact section data from GitHub Gist
 */
export async function getContactData(): Promise<ContactData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_CONTACT_URL;

    if (!url) {
      console.error('Missing environment variable for Contact section');
      return fallbackData;
    }

    return await fetchFromGist<ContactData>(url);
  } catch (error) {
    console.error('Error fetching contact data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return fallbackData;
  }
}
