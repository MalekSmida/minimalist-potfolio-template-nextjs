import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import NavButton from './NavButton';

// Constants
const mockTitle = 'Test Title',
  mockAnchorLink = 'Test anchor link';

describe('NavButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders the navigation button component without errors', () => {
    render(<NavButton title={mockTitle} anchorLink={mockAnchorLink} />);

    // Test on aria-label for accessibility
    expect(
      screen.getByRole('link', { name: `Navigate to the section ${mockTitle}` }),
    ).toBeDefined();

    /**
     * For information:
     * Could not test href value as it turns out that Vitest does not have toHaveAttribute() funtion.
     * An alternative is to use "data-testid" : https://stackoverflow.com/a/78227205/13987596
     */

    expect(screen.getByText(mockTitle)).toBeDefined();
  });
});
