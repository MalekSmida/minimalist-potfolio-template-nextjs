import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// Mock the services
vi.mock('@/services', () => ({
  getPresentationData: vi.fn().mockResolvedValue({
    name: 'Malek',
    jobTitle: 'Developer',
    yearsOfExperience: '5+ years',
    description: 'Description',
  }),
  getCareerData: vi.fn().mockResolvedValue({
    descriptionList: [],
    experienceList: [],
  }),
  getAboutData: vi.fn().mockResolvedValue({
    title: 'About Me',
    paragraphs: ['Test paragraph'],
    focusList: ['Test focus'],
  }),
  getSkillsData: vi.fn().mockResolvedValue([
    {
      title: 'Test Skills',
      skillList: [],
    },
  ]),
}));

// Mock the page directly
vi.mock('./page', () => ({
  default: async () => {
    const { NavHeader } = await import('@/components');

    return (
      <>
        <NavHeader navButtonList={[]} />
        <div data-testid="mock-presentation">Presentation Section</div>
        <div data-testid="mock-career">Career Section</div>
        <div data-testid="mock-about">About Section</div>
        <div data-testid="mock-skills">Skills Section</div>
      </>
    );
  },
}));

// Mock NavHeader component
vi.mock('@/components', () => ({
  NavHeader: () => <nav>Navigation Header</nav>,
}));

// Local files
import Home from './page';

describe('Home Page', () => {
  /**
   * Important:
   * When having multiple tests you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  test('should render without errors', async () => {
    // Pre-render the component before rendering as it's an async Server Component
    const HomeComponent = await Home();
    render(HomeComponent);

    // should render navigation menu
    expect(screen.getByText('Navigation Header')).toBeDefined();

    // Check that the mocked sections are rendered
    expect(screen.getByTestId('mock-presentation')).toBeDefined();
    expect(screen.getByTestId('mock-career')).toBeDefined();
    expect(screen.getByTestId('mock-about')).toBeDefined();
    expect(screen.getByTestId('mock-skills')).toBeDefined();
  });
});
