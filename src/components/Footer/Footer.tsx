// local files
import SocialLinksSection from './SocialLinksSection';
import CopyrightSection from './CopyrightSection';

interface PropsFooter {
  linkedin?: string;
  github?: string;
  stackoverflow?: string;
  websiteRepo?: string;
}

/**
 * Footer Component
 *
 * A semantic footer component that contains social links and copyright information.
 * The component is structured with proper ARIA landmarks and semantic HTML for accessibility.
 *
 * @accessibility
 * - Uses semantic <footer> element with role="contentinfo"
 * - Contains properly labeled sections with appropriate ARIA landmarks
 * - Social links include descriptive aria-labels and hidden text for screen readers
 * - Copyright information includes hidden attribution text for screen readers
 *
 * @example
 * <Footer
 *   linkedin="https://linkedin.com/in/username"
 *   github="https://github.com/username"
 *   stackoverflow="https://stackoverflow.com/users/123/username"
 *   websiteRepo="https://github.com/username/repo"
 * />
 */
const Footer: React.FC<PropsFooter> = ({
  linkedin,
  github,
  stackoverflow,
  websiteRepo,
}) => {
  return (
    <footer
      className="flex w-full flex-col items-center bg-gray-900 p-4 text-white sm:p-6 lg:p-8 dark:bg-gray-950"
      role="contentinfo"
      aria-label="Site footer"
    >
      <SocialLinksSection
        linkedinProfile={linkedin}
        githubProfile={github}
        stackoverflowProfile={stackoverflow}
      />

      <hr className="my-4 h-0.5 w-full bg-gray-800 opacity-5" aria-hidden="true" />

      <CopyrightSection githubRepository={websiteRepo} />
    </footer>
  );
};

export default Footer;
