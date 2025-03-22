import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// Local files
import Home from './page';

describe('Home Page', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  test('should renders without errors', () => {
    render(<Home />);

    // should renders navigation menu
    expect(screen.getByRole('navigation')).toBeDefined();

    // should renders at least presentation section
    expect(screen.getByText(/^Hi, I am/i)).toBeDefined();
  });
});
