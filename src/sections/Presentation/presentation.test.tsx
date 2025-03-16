import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Presentation from './Presentation';

const dummyData = {
  Name: 'John Doe',
  JobTitleList: ['Software Engineer', 'Designer'],
  CvPdfLink: 'https://drive.google.com/file/test',
};

describe('Presentation Section', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders the Presentation component without errors', () => {
    render(<Presentation />);

    // Should show fallback name
    expect(screen.getByText('I am No body')).toBeDefined();
  });

  test('should renders the name correctly', () => {
    render(<Presentation name={dummyData.Name} />);
    expect(screen.getByRole('heading', { name: 'I am John Doe' })).toBeDefined();
  });

  test('should renders job titles correctly', () => {
    render(<Presentation jobTitleList={dummyData.JobTitleList} />);
    dummyData.JobTitleList.forEach((title) => {
      expect(screen.getByText(title)).toBeDefined();
    });
  });

  test('should renders download button correctly', () => {
    render(
      <Presentation
        name={dummyData.Name}
        jobTitleList={dummyData.JobTitleList}
        cvPdfLink={dummyData.CvPdfLink}
      />,
    );
    expect(
      screen
        .getByRole('link', { name: `Download ${dummyData.Name}'s resume as PDF` })
        .getAttribute('href'),
    ).toBe(dummyData.CvPdfLink);
  });
});
