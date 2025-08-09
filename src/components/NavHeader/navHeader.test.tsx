import { expect, test, describe, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import NavHeader from './NavHeader';
import { INavButton } from './navHeader.types';

// Mock the hooks
vi.mock('@/hooks', () => ({
  useShowNavHeader: vi.fn().mockReturnValue({ showNavHeader: true }),
}));

// Mock DarkModeToggleButton
vi.mock('../DarkModeToggleButton', () => ({
  default: () => <div>Dark Mode Toggle</div>,
}));

// Constants
const mockNavButtonList: INavButton[] = [
  { title: 'Test title 1', page: '/test1' },
  { title: 'Test title 2', page: '/test2' },
];

describe('NavHeader Component', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('should renders the navigation header component without errors', () => {
    render(<NavHeader navButtonList={[]} />);
    expect(screen.getByRole('banner')).toBeDefined();
  });

  test('should renders the navigation buttons correctly', () => {
    render(<NavHeader navButtonList={mockNavButtonList} />);
    expect(screen.getByRole('navigation')).toBeDefined();

    expect(screen.getByText(mockNavButtonList[0].title)).toBeDefined();
    expect(screen.getByText(mockNavButtonList[1].title)).toBeDefined();

    // Check if links have correct href attributes
    const link1 = screen.getByRole('link', { name: `Navigate to the page ${mockNavButtonList[0].title}` });
    const link2 = screen.getByRole('link', { name: `Navigate to the page ${mockNavButtonList[1].title}` });
    expect(link1.getAttribute('href')).toBe(mockNavButtonList[0].page);
    expect(link2.getAttribute('href')).toBe(mockNavButtonList[1].page);
  });
});
