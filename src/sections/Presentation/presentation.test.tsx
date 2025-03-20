import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Presentation from './Presentation';

const mockData = {
  Name: 'John Doe',
  JobTitle: 'Software Engineer',
  yearsOfExperience: '1000 years',
  description: 'Self motivated, agile mind software engineer.',
  CvPdfLink: 'https://drive.google.com/file/test',
};

describe('Presentation Section', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('1- should renders the Presentation component without errors', () => {
    render(<Presentation name="" />);

    // Should show fallback name
    expect(screen.getByText('Hi, I am No body')).toBeDefined();
  });

  test('2- should renders the name correctly', () => {
    render(<Presentation name={mockData.Name} />);
    expect(screen.getByRole('heading', { name: 'Hi, I am John Doe' })).toBeDefined();
  });

  test('3- should renders job titles correctly', () => {
    render(<Presentation name="" jobTitle={mockData.JobTitle} />);
    expect(screen.getByText(mockData.JobTitle)).toBeDefined();
  });

  test('4- should renders years of experience correctly', () => {
    render(<Presentation name="" yearsOfExperience={mockData.yearsOfExperience} />);
    expect(screen.getByText(mockData.yearsOfExperience)).toBeDefined();
  });

  test('5- should renders description correctly', () => {
    render(<Presentation name="" description={mockData.description} />);
    expect(screen.getByText(mockData.description)).toBeDefined();
  });

  test('6- should renders download button correctly', () => {
    render(
      <Presentation
        name={mockData.Name}
        jobTitle={mockData.JobTitle}
        cvPdfLink={mockData.CvPdfLink}
      />,
    );
    expect(
      screen
        .getByRole('link', { name: `Download ${mockData.Name}'s resume as PDF` })
        .getAttribute('href'),
    ).toBe(mockData.CvPdfLink);
  });
});
