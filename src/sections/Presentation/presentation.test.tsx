import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Presentation from './Presentation';

const mockData = {
  Name: 'John Doe',
  JobTitleList: ['Software Engineer', 'Designer'],
  CvPdfLink: 'https://drive.google.com/file/test',
};

describe('Presentation Section', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders the Presentation component without errors', () => {
    render(<Presentation name="" />);

    // Should show fallback name
    expect(screen.getByText('I am No body')).toBeDefined();
  });

  test('should renders the name correctly', () => {
    render(<Presentation name={mockData.Name} />);
    expect(screen.getByRole('heading', { name: 'I am John Doe' })).toBeDefined();
  });

  test('should renders job titles correctly', () => {
    render(<Presentation name="" jobTitleList={mockData.JobTitleList} />);
    mockData.JobTitleList.forEach((title) => {
      expect(screen.getByText(title)).toBeDefined();
    });
  });

  test('should renders download button correctly', () => {
    render(
      <Presentation
        name={mockData.Name}
        jobTitleList={mockData.JobTitleList}
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
