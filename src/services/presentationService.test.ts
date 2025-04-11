import { describe, expect, it, vi, beforeEach } from 'vitest';
import { getPresentationData } from './presentationService';
import * as gistService from './gistService';

// Set up environment variable
const mockUrl = 'https://example.com/presentation.json';

// Mock the gistService
vi.mock('./gistService', () => ({
  fetchFromGist: vi.fn(),
}));

// Set the actual environment variable in each test
describe('presentationService', () => {
  const mockPresentationData = {
    name: 'Test Name',
    jobTitle: 'Test Job Title',
    description: 'Test Description',
    yearsOfExperience: '5+ years',
  };

  beforeEach(() => {
    vi.resetAllMocks();
    // Reset the process.env mock before each test
    process.env.NEXT_PUBLIC_GIST_PRESENTATION_URL = mockUrl;
    // Setup default behavior for fetchFromGist
    vi.mocked(gistService.fetchFromGist).mockResolvedValue(mockPresentationData);
  });

  it('should fetch presentation data from the correct URL', async () => {
    const result = await getPresentationData();

    expect(gistService.fetchFromGist).toHaveBeenCalledWith(mockUrl);
    expect(result).toEqual(mockPresentationData);
  });

  it('should throw an error when the environment variable is not defined', async () => {
    // Unset the environment variable for this test
    delete process.env.NEXT_PUBLIC_GIST_PRESENTATION_URL;

    const result = await getPresentationData();

    expect(result).toEqual({});
  });

  it('should throw an error when fetchFromGist fails', async () => {
    const error = new Error('Failed to fetch');
    vi.mocked(gistService.fetchFromGist).mockRejectedValue(error);

    const result = await getPresentationData();

    expect(result).toEqual({});
  });
});
