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
  afterEach(() => {
    cleanup();
  });

  test('1- should renders without crashing', () => {
    render(<ExperienceCard {...mockProps} />);
  });

  test('2- should displays positions correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    mockProps.positions.forEach((position) => {
      expect(screen.getByText(position)).toBeDefined();
    });
  });

  test('3- should displays company name with @ symbol', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(`@${mockProps.company}`)).toBeDefined();
  });

  test('4- should displays contractType if no company is provided', () => {
    render(<ExperienceCard {...mockProps} company={undefined} />);
    expect(screen.getByText(mockProps.contractType)).toBeDefined();
  });

  test('5- should displays summary correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(mockProps.summary)).toBeDefined();
  });
});
