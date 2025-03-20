import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import ExperienceCard from './ExperienceCard';
import { IExperienceCard } from './experienceCard.types';

// Sample props for testing
const mockProps: IExperienceCard = {
  _id: '12345',
  contractType: 'Full-time',
  positions: ['Frontend Developer', 'Team Lead'],
  company: 'Tech Corp',
  summary: 'Developed multiple high-impact web applications.',
};

describe('ExperienceCard Component', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('1- should renders without crashing', () => {
    render(<ExperienceCard {...mockProps} />);

    // The link and article should be in the document
    const link = screen.getByRole('link');
    expect(link).toBeDefined();
    const article = screen.getByRole('article', { name: mockProps.positions[0] });
    expect(article).toBeDefined();
  });

  test('2- should add page href to link', () => {
    render(<ExperienceCard {...mockProps} />);

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe(`/experience/${mockProps._id}`);
  });

  test('3- should displays positions correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    mockProps.positions.forEach((position) => {
      expect(screen.getByText(position)).toBeDefined();
    });
  });

  test('4- should displays company name with @ symbol', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(`@${mockProps.company}`)).toBeDefined();
  });

  test('5- should displays contractType if no company is provided', () => {
    render(<ExperienceCard {...mockProps} company={undefined} />);
    expect(screen.getByText(mockProps.contractType)).toBeDefined();
  });

  test('6- should displays summary correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(mockProps.summary)).toBeDefined();
  });
});
