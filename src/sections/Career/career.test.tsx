import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Experiences from './Career';

// mock data
const mockDescriptionList = [
  'Experienced full-stack developer with a passion for building scalable applications.',
  'Strong background in web and mobile development.',
];
const mockExperienceList = [
  {
    _id: '1',
    contractType: 'Full-Time',
    position: 'Senior Developer',
    company: 'Tech Corp',
    summary: 'Worked on developing enterprise-level applications.',
  },
  {
    _id: '2',
    contractType: 'Freelance',
    position: 'Frontend Engineer',
    company: 'Creative Solutions',
    summary: 'Designed and implemented UI components.',
  },
];

describe('Career Section', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('should renders nothing when no data is provided', () => {
    const { container } = render(<Experiences experienceList={[]} descriptionList={[]} />);
    // In React, when a component returns null, React does not remove the parent container.
    // Instead, it renders an empty container (<div></div> by default when using render() from @testing-library/react).
    // We should check if the container is empty
    expect(container.firstChild).toBeNull();
  });

  test('should renders heading correctly', () => {
    render(<Experiences experienceList={mockExperienceList} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Career' })).toBeDefined();
  });

  test('should renders career description when provided', () => {
    render(<Experiences descriptionList={mockDescriptionList} experienceList={[]} />);
    mockDescriptionList.forEach((description) => {
      expect(screen.getByText(description)).toBeDefined();
    });
  });

  test('should renders experiences when provided', () => {
    render(<Experiences experienceList={mockExperienceList} />);
    mockExperienceList.forEach((exp) => {
      expect(screen.getByText(exp.position)).toBeDefined();
      expect(screen.getByText(`@${exp.company}`)).toBeDefined();
      expect(screen.getByText(exp.summary)).toBeDefined();
    });
  });
});
