import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { fetchFromGist } from './gistService';

// Mock the global fetch function
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('gistService', () => {
  const mockUrl = 'https://example.com/gist.json';
  const mockData = { test: 'data' };
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Setup a successful response by default
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    // Mock console.error properly using spyOn
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.resetAllMocks();
    consoleErrorSpy.mockRestore();
  });

  it('should fetch data from a gist URL', async () => {
    const result = await fetchFromGist(mockUrl);

    expect(mockFetch).toHaveBeenCalledWith(mockUrl, { next: { revalidate: 3600 } });
    expect(result).toEqual(mockData);
  });

  it('should throw an error when the fetch fails', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(fetchFromGist(mockUrl)).rejects.toThrow(
      'Failed to fetch data from Gist: Not Found',
    );
    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  it('should throw an error when fetch throws', async () => {
    const error = new Error('Network error');
    mockFetch.mockRejectedValue(error);

    await expect(fetchFromGist(mockUrl)).rejects.toThrow();
    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
