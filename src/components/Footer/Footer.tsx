// local files
import ContactSection from './ContactSection';
import SocialLinksSection from './SocialLinksSection';
import CopyrightSection from './CopyrightSection';

interface PropsFooter {
  email?: string;
  address?: string;
  phone?: string;
  googleMapsLink?: string;
  linkedinProfile?: string;
  githubProfile?: string;
  githubRepository?: string;
}

/**
 * Footer Component
 *
 * A semantic footer component that contains contact information, social links,
 * and copyright information. The component is structured with proper ARIA landmarks
 * and semantic HTML for accessibility.
 *
 * @accessibility
 * - Uses semantic <footer> element with role="contentinfo"
 * - Contains properly labeled sections with appropriate ARIA landmarks
 * - Social links include descriptive aria-labels and hidden text for screen readers
 * - Contact information uses semantic HTML and proper ARIA attributes
 * - Copyright information includes hidden attribution text for screen readers
 *
 * @example
 * <Footer
 *   email="contact@example.com"
 *   address="123 Main St"
 *   phone="+1234567890"
 *   googleMapsLink="https://maps.google.com"
 *   linkedinProfile="https://linkedin.com"
 *   githubProfile="https://github.com"
 *   githubRepository="https://github.com/repo"
 * />
 */
const Footer: React.FC<PropsFooter> = ({
  email,
  address,
  phone,
  googleMapsLink,
  linkedinProfile,
  githubProfile,
  githubRepository,
}) => {
  return (
    <footer
      className="flex w-full flex-col items-center bg-gray-900 p-4 text-white sm:p-6 lg:p-8 dark:bg-gray-950"
      role="contentinfo"
      aria-label="Site footer"
    >
      <ContactSection
        email={email}
        address={address}
        phone={phone}
        googleMapsLink={googleMapsLink}
      />

      <SocialLinksSection linkedinProfile={linkedinProfile} githubProfile={githubProfile} />

      <hr className="my-4 h-0.5 w-full bg-gray-800 opacity-5" aria-hidden="true" />

      <CopyrightSection githubRepository={githubRepository} />
    </footer>
  );
};

export default Footer;
