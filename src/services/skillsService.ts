import { fetchFromGist } from './gistService';
import { SkillsData } from './types';

const fallbackdata: SkillsData = [];

/**
 * Fetches the skills section data from GitHub Gist
 */
export async function getSkillsData(): Promise<SkillsData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_SKILLS_URL;

    if (!url) {
      console.error('Missing environment variable for skills section');
      // Return fallback data instead of throwing to prevent page from crashing
      return fallbackdata;
    }

    return await fetchFromGist<SkillsData>(url);
  } catch (error) {
    console.error('Error fetching skills data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return fallbackdata;
  }
}
