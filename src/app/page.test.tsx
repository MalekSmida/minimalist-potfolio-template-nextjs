import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// Mock the lazy-loaded components
vi.mock('@/sections/Presentation', () => ({
  default: ({ name }: { name: string }) => <div>Hi, I am {name}</div>,
}));

vi.mock('@/sections/Career', () => ({
  default: () => <div>Career Section</div>,
}));

vi.mock('@/sections/About', () => ({
  default: () => <div>About Section</div>,
}));

vi.mock('@/sections/Skills', () => ({
  default: () => <div>Skills Section</div>,
}));

// Mock the presentation data
vi.mock('@/data', () => ({
  presentationSectionData: {
    name: 'Malek',
    jobTitle: 'Developer',
    yearsOfExperience: 5,
    description: 'Description',
    cvPdfLink: '#',
  },
  careerSectionData: {
    descriptionList: [],
    experienceList: [],
  },
  aboutSectionData: [],
  skillsSectionData: [],
  contactSectionData: {},
}));

// Local files
import Home from './page';

describe('Home Page', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('should renders without errors', async () => {
    render(<Home />);

    // should renders navigation menu
    expect(screen.getByRole('navigation')).toBeDefined();

    // should renders presentation section (which is now lazy loaded)
    // Using findByText instead of getByText because it's asynchronous and works with suspense
    expect(await screen.findByText(/^Hi, I am/i)).toBeDefined();
  });
});
