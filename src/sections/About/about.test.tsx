import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import About from './About';

// mock data
const mockBlockList = [
  {
    title: 'First block',
    aboutList: [],
  },
  {
    title: '',
    aboutList: ['Second block item 1'],
  },
  {
    title: 'Third block',
    aboutList: ['Third block item 1', 'Third block item 2'],
  },
];

describe('About Section', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('should renders nothing when no data is provided', () => {
    const { container } = render(<About blockList={[]} />);
    // In React, when a component returns null, React does not remove the parent container.
    // Instead, it renders an empty container (<div></div> by default when using render() from @testing-library/react).
    // We should check if the container is empty
    expect(container.firstChild).toBeNull();
  });

  test('should renders heading correctly', () => {
    render(<About blockList={mockBlockList} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Hello again 👋' })).toBeDefined();
  });

  test('should not render block when aboutList is empty', () => {
    render(<About blockList={mockBlockList} />);

    expect(screen.queryByText(mockBlockList[0].title)).toBeNull();
  });

  test('should render block of aboutList even when title is empty', () => {
    render(<About blockList={mockBlockList} />);

    mockBlockList[1].aboutList.forEach((description) => {
      expect(screen.getByText(description)).toBeDefined();
    });
  });

  test('should renders experiences when provided', () => {
    render(<About blockList={mockBlockList} />);

    mockBlockList[2].aboutList.forEach((description) => {
      expect(screen.getByText(description)).toBeDefined();
    });
  });
});
