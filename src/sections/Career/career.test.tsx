import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Experiences from './Career';

// mock data
const mockCareerDescriptionList = [
  'Experienced full-stack developer with a passion for building scalable applications.',
  'Strong background in web and mobile development.',
];
const mockExperiences = [
  {
    _id: '1',
    contractType: 'Full-Time',
    positions: ['Senior Developer'],
    company: 'Tech Corp',
    summary: 'Worked on developing enterprise-level applications.',
  },
  {
    _id: '2',
    contractType: 'Freelance',
    positions: ['Frontend Engineer'],
    company: 'Creative Solutions',
    summary: 'Designed and implemented UI components.',
  },
];

describe('Experiences Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders career description when provided', () => {
    render(<Experiences careerDescriptionList={mockCareerDescriptionList} experiences={[]} />);
    mockCareerDescriptionList.forEach((description) => {
      expect(screen.getByText(description)).toBeDefined();
    });
  });

  test('should renders experiences when provided', () => {
    render(<Experiences experiences={mockExperiences} />);
    mockExperiences.forEach((exp) => {
      expect(screen.getByText(exp.positions[0])).toBeDefined();
      expect(screen.getByText(`@${exp.company}`)).toBeDefined();
      expect(screen.getByText(exp.summary)).toBeDefined();
    });
  });

  test('should renders nothing when no data is provided', () => {
    const { container } = render(<Experiences experiences={[]} careerDescriptionList={[]} />);
    // In React, when a component returns null, React does not remove the parent container.
    // Instead, it renders an empty container (<div></div> by default when using render() from @testing-library/react).
    // We should check if the container is empty
    expect(container.firstChild).toBeNull();
  });

  test('should renders heading correctly', () => {
    render(<Experiences experiences={mockExperiences} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Career' })).toBeDefined();
  });
});
