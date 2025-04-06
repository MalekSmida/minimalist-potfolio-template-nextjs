import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// local files
import Footer from './Footer';

const mockData = {
  email: 'test@mail.com',
  address: '123 Test Street',
  phone: '+123456789',
  googleMapsLink: 'https://maps.google.com/?q=123+Test+Street',
  linkedinProfile: 'https://www.linkedin.com/in/testuser/',
  githubProfile: 'https://github.com/testuser',
  githubRepository: 'https://github.com/testuser/testrepo',
};

describe('Footer Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders the footer component without errors', () => {
    render(<Footer />);

    // Check official docs to detect the title of the role of the component : https://www.w3.org/TR/html-aria/#docconformance
    expect(screen.getByRole('contentinfo')).toBeDefined();

    // Test if CopyrightSection is rendered
    expect(screen.getByText(/©/i)).toBeDefined();
    // should not display "Fork it" when when props are not passed
    expect(screen.queryByText(/Fork it/i)).toBeNull();
  });

  describe('Contact Section', () => {
    test('should not render when empty props', () => {
      render(<Footer />);

      // Should not render contact section when props are not passed
      expect(screen.queryByText(/Contact/i)).toBeNull();
    });

    test('should render contact section with email when email is valid', () => {
      render(<Footer email={mockData.email} />);

      expect(screen.getByText(mockData.email)).toBeDefined();
    });
    test('should render contact section with address when both address and googleMapsLink are valid', () => {
      render(<Footer address={mockData.address} googleMapsLink={mockData.googleMapsLink} />);

      expect(screen.getByText(mockData.address)).toBeDefined();
    });
    test('should render contact section with phone when phone is valid', () => {
      render(<Footer phone={mockData.phone} />);

      expect(screen.getByText(mockData.phone)).toBeDefined();
    });
    test('should render contact section with all data when valid props', () => {
      render(
        <Footer
          email={mockData.email}
          address={mockData.address}
          phone={mockData.phone}
          googleMapsLink={mockData.googleMapsLink}
        />,
      );

      expect(screen.getByText(/Contact/i)).toBeDefined();
      expect(screen.getByText(mockData.email)).toBeDefined();
      expect(screen.getByText(mockData.address)).toBeDefined();
      expect(screen.getByText(mockData.phone)).toBeDefined();
    });

    test('should redirect to valid urls when clicked', () => {
      render(
        <Footer
          email={mockData.email}
          address={mockData.address}
          phone={mockData.phone}
          googleMapsLink={mockData.googleMapsLink}
        />,
      );

      /**
       * For information:
       * Could not test href value directly via toHaveAttribute() as it turns out that Vitest does not have it.
       * An alternative is to use getAttribute('href') : https://stackoverflow.com/a/78227205/13987596
       */
      // Test email link
      expect(
        screen
          .getByRole('link', { name: `Send an email to ${mockData.email}` })
          .getAttribute('href'),
      ).toBe(`mailto:${mockData.email}`);
      // Test address link
      expect(
        screen
          .getByRole('link', { name: `View address on Google Maps: ${mockData.address}` })
          .getAttribute('href'),
      ).toBe(mockData.googleMapsLink);
      // Test phone link
      expect(
        screen
          .getByRole('link', { name: `Call phone number: ${mockData.phone}` })
          .getAttribute('href'),
      ).toBe(`tel:${mockData.phone}`);
    });
  });

  describe('Social Links Section', () => {
    test('should not render when empty props', () => {
      render(<Footer />);

      // should not render social links section when props are not passed
      expect(screen.queryByText(/Linkedin/i)).toBeNull();
      expect(screen.queryByText(/Github/i)).toBeNull();
    });

    test('should renders linkedin link when valid props', () => {
      render(<Footer linkedinProfile={mockData.linkedinProfile} />);

      expect(
        screen.getByRole('link', { name: 'Visit LinkedIn profile (opens in new tab)' }),
      ).toBeDefined();
      // Should not render github link
      expect(screen.queryByText(/Github/i)).toBeNull();
    });

    test('should renders github link when valid props', () => {
      render(<Footer githubProfile={mockData.githubProfile} />);

      expect(
        screen.getByRole('link', { name: 'Visit GitHub profile (opens in new tab)' }),
      ).toBeDefined();
      // Should not render linkedin link
      expect(screen.queryByText(/Linkedin/i)).toBeNull();
    });

    test('should renders social links section when valid props', () => {
      render(
        <Footer
          linkedinProfile={mockData.linkedinProfile}
          githubProfile={mockData.githubProfile}
        />,
      );

      expect(
        screen.getByRole('link', { name: 'Visit LinkedIn profile (opens in new tab)' }),
      ).toBeDefined();
      expect(
        screen.getByRole('link', { name: 'Visit GitHub profile (opens in new tab)' }),
      ).toBeDefined();
    });

    test('should redirect to valid urls when clicked', () => {
      render(
        <Footer
          linkedinProfile={mockData.linkedinProfile}
          githubProfile={mockData.githubProfile}
        />,
      );

      // Test linkedin link
      expect(
        screen
          .getByRole('link', { name: 'Visit LinkedIn profile (opens in new tab)' })
          .getAttribute('href'),
      ).toBe(mockData.linkedinProfile);
      // Test github link
      expect(
        screen
          .getByRole('link', { name: 'Visit GitHub profile (opens in new tab)' })
          .getAttribute('href'),
      ).toBe(mockData.githubProfile);
    });
  });

  describe('Copyright Section', () => {
    test('should renders fork-it when valid props', () => {
      render(<Footer githubRepository={mockData.githubRepository} />);

      expect(screen.getByText(/Fork it/i)).toBeDefined();
    });

    test('should redirect to valid urls when clicked', () => {
      render(<Footer githubRepository={mockData.githubRepository} />);

      // Test github repository link in "Fork it"
      expect(
        screen
          .getByRole('link', { name: 'Fork this portfolio template on GitHub (opens in new tab)' })
          .getAttribute('href'),
      ).toBe(mockData.githubRepository);
    });
  });
});
