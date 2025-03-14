import { expect, test, describe, afterEach } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

// local files
import Footer from './Footer';

const dummyData = {
  Email: 'test@mail.com',
  Address: '123 Test Street',
  Phone: '+123456789',
  GoogleMapsURLForAddress: 'https://maps.google.com/?q=123+Test+Street',
  Linkedin: 'https://www.linkedin.com/in/testuser/',
  Github: 'https://github.com/testuser',
  GithubRepo: 'https://github.com/testuser/testrepo',
};

describe('Footer Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should renders the footer component without errors', () => {
    render(<Footer />);

    // Check official docs to detect the title of the role of the component : https://www.w3.org/TR/html-aria/#docconformance
    expect(screen.getByRole('contentinfo')).toBeDefined();

    // Should not render contact section when props are not passed
    expect(screen.queryByText(/Contact/i)).toBeNull();

    // should not render social links section when when props are not passed
    expect(screen.queryByText(/Linkedin/i)).toBeNull();
    expect(screen.queryByText(/Github/i)).toBeNull();

    // Test if CopyrightSection is rendered
    expect(screen.getByText(/©/i)).toBeDefined();
    // should not display "Fork it" when when props are not passed
    expect(screen.queryByText(/Fork it/i)).toBeNull();
  });

  test('should renders contact section when valid props', () => {
    render(
      <Footer
        email={dummyData.Email}
        address={dummyData.Address}
        phone={dummyData.Phone}
        googleMapsURLForAddress={dummyData.GoogleMapsURLForAddress}
      />,
    );

    expect(screen.getByText(/Contact/i)).toBeDefined();
    expect(screen.getByText(dummyData.Email)).toBeDefined();
    expect(screen.getByText(dummyData.Address)).toBeDefined();
    expect(screen.getByText(dummyData.Phone)).toBeDefined();
  });

  test('should renders social links section when valid props', () => {
    render(<Footer linkedinUrl={dummyData.Linkedin} githubUrl={dummyData.Github} />);

    expect(screen.getByRole('link', { name: 'Linkedin' })).toBeDefined();
    expect(screen.getByRole('link', { name: 'Github' })).toBeDefined();
  });

  test('should renders fork-it when valid props', () => {
    render(<Footer githubRepo={dummyData.GithubRepo} />);

    expect(screen.getByText(/Fork it/i)).toBeDefined();
  });

  test('should redirect to valid urls when clicked', () => {
    render(
      <Footer
        email={dummyData.Email}
        address={dummyData.Address}
        phone={dummyData.Phone}
        googleMapsURLForAddress={dummyData.GoogleMapsURLForAddress}
        linkedinUrl={dummyData.Linkedin}
        githubUrl={dummyData.Github}
        githubRepo={dummyData.GithubRepo}
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
        .getByRole('link', { name: `Send an email to ${dummyData.Email}` })
        .getAttribute('href'),
    ).toBe(`mailto:${dummyData.Email}`);
    // Test address link
    expect(
      screen.getByRole('link', { name: 'View address on Google Maps' }).getAttribute('href'),
    ).toBe(dummyData.GoogleMapsURLForAddress);
    // Test phone link
    expect(screen.getByRole('link', { name: `Call ${dummyData.Phone}` }).getAttribute('href')).toBe(
      `tel:${dummyData.Phone}`,
    );

    // Test linkedin link
    expect(screen.getByRole('link', { name: 'Linkedin' }).getAttribute('href')).toBe(
      dummyData.Linkedin,
    );
    // Test github link
    expect(screen.getByRole('link', { name: 'Github' }).getAttribute('href')).toBe(
      dummyData.Github,
    );

    // Test github repository link in "Fork it"
    expect(screen.getByRole('link', { name: 'Fork it' }).getAttribute('href')).toBe(
      dummyData.GithubRepo,
    );
  });
});
