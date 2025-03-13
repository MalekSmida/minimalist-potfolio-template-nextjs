import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavButton from './NavButton';

const dummyTitle = 'dummy title',
  dummyAnchorLink = 'https://www.test.com/';

describe('NavButton Component', () => {
  test('should renders the navigation button component without errors', () => {
    render(<NavButton title={dummyTitle} anchorLink={dummyAnchorLink} />);

    // Test on aria-label for accessibility
    expect(
      screen.getByRole('link', { name: `Navigate to the section ${dummyTitle}` }),
    ).toBeDefined();

    expect(screen.getByText(dummyTitle)).toBeDefined();
  });
});
