import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import NavButton from './NavButton';

// Constants
const dummyTitle = 'dummy title',
  dummyAnchorLink = 'dummy anchor link';

describe('NavButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders the navigation button component without errors', () => {
    render(<NavButton title={dummyTitle} anchorLink={dummyAnchorLink} />);

    // Test on aria-label for accessibility
    expect(
      screen.getByRole('link', { name: `Navigate to the section ${dummyTitle}` }),
    ).toBeDefined();

    /**
     * For information:
     * Could not test href value as it turns out that Vitest does not have toHaveAttribute() funtion.
     * An alternative is to use "data-testid" : https://stackoverflow.com/a/78227205/13987596
     */

    expect(screen.getByText(dummyTitle)).toBeDefined();
  });
});
