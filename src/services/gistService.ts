/**
 * Fetches data from a GitHub Gist
 * @param url - The full URL to the GitHub Gist JSON file
 * @returns The parsed JSON data
 */
export async function fetchFromGist<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      throw new Error(`Failed to fetch data from Gist: ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Error fetching data from Gist:', error);
    throw error;
  }
}
