import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Intro from './Intro';

const dummyData = {
  Name: 'John Doe',
  JobTitleList: ['Software Engineer', 'Designer'],
  CvPdfLink: 'https://drive.google.com/file/test',
};

describe('Intro Section', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders the Intro component without errors', () => {
    render(<Intro />);

    // Should show fallback name
    expect(screen.getByText('I am No body')).toBeDefined();
  });

  test('should renders the name correctly', () => {
    render(<Intro name={dummyData.Name} />);
    expect(screen.getByRole('heading', { name: 'I am John Doe' })).toBeDefined();
  });

  test('should renders job titles correctly', () => {
    render(<Intro jobTitleList={dummyData.JobTitleList} />);
    dummyData.JobTitleList.forEach((title) => {
      expect(screen.getByText(title)).toBeDefined();
    });
  });

  test('should renders download button correctly', () => {
    render(
      <Intro
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
