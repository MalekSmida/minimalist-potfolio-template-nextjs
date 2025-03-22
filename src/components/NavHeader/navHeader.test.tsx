import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import NavHeader from './NavHeader';
import { INavButton } from '../NavButton';

// Constants
const mockNavButtonList: INavButton[] = [
  { title: 'Test title 1', link: { type: 'href', id: 'https://test.com/1' } },
  { title: 'Test title 2', link: { type: 'href', id: 'https://test.com/2' } },
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
  });
});
