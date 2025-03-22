import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import NavButton from './NavButton';
import { INavButton } from './navButton.types';

// Constants
const mockTitle = 'Test Title',
  mockLink: INavButton['link'] = { type: 'href', id: 'https://test.com/' },
  mockAnchorLink: INavButton['link'] = { type: 'anchorLink', id: 'Test anchor link' };

describe('NavButton Component', () => {
  /**
   * Important:
   * When having multiple test you should add cleanup as Vitest does not cleanup by default, leaving previously mounted components to be accessed by later tests
   * Github issue : https://github.com/testing-library/vue-testing-library/issues/296
   */
  afterEach(() => {
    cleanup();
  });

  describe('NavButtonHref Component', () => {
    test('should renders the href link component without errors', () => {
      render(<NavButton title={mockTitle} link={mockLink} />);

      // Test on aria-label for accessibility
      expect(screen.getByRole('link', { name: `Navigate to the page ${mockTitle}` })).toBeDefined();

      /**
       * For information:
       * Could not test href value as it turns out that Vitest does not have toHaveAttribute() funtion.
       * So I used getAttribute().
       * An alternative is to use "data-testid" : https://stackoverflow.com/a/78227205/13987596
       */
      expect(screen.getByText(mockTitle).getAttribute('href')).toBe(mockLink.id);
    });
  });

  describe('NavButtonAnchor Component', () => {
    test('should renders the anchor link button component without errors', () => {
      render(<NavButton title={mockTitle} link={mockAnchorLink} />);

      expect(
        screen.getByRole('button', { name: `Navigate to the section ${mockTitle}` }),
      ).toBeDefined();
    });
  });
});
