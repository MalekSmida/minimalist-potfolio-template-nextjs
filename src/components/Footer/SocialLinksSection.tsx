import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  StackOverflowIcon,
} from '@/assets/svgIcons';

interface PropsSocialLinksSection {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  stackoverflow?: string;
}

/**
 * SocialLinksSection Component
 *
 * Displays social media links with icons and proper accessibility attributes.
 *
 * @accessibility
 * - Each social link has a descriptive aria-label
 * - Icons are hidden from screen readers with aria-hidden="true"
 * - Links have visible focus states for keyboard navigation
 * - Hidden text is provided for screen readers
 * - The list structure uses semantic HTML with proper ARIA roles
 *
 * @example
 * <SocialLinksSection
 *   linkedin="https://linkedin.com/in/username"
 *   github="https://github.com/username"
 *   stackoverflow="https://stackoverflow.com/users/123/username"
 * />
 */
const SocialLinksSection: React.FC<PropsSocialLinksSection> = ({
  email,
  phone,
  linkedin,
  github,
  stackoverflow,
}) => {
  // break when empty props
  if (!linkedin && !github && !stackoverflow) return;

  return (
    <section aria-label="Social media links">
      <ul
        className="flex items-center gap-4 md:gap-6"
        role="list"
        aria-label="Social media profiles"
      >
        {/* Email */}
        {email && (
          <li role="listitem">
            <a
              href={`mailto:${email}`}
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label={`Email ${email}`}
            >
              <span className="sr-only">Email</span>
              <EmailIcon />
            </a>
          </li>
        )}

        {/* Phone */}
        {phone && (
          <li role="listitem">
            <a
              href={`tel:${phone}`}
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label={`Call ${phone}`}
            >
              <span className="sr-only">Phone</span>
              <PhoneIcon />
            </a>
          </li>
        )}

        {/* Linkedin */}
        {linkedin && (
          <li role="listitem">
            <a
              href={linkedin}
              rel="noopener noreferrer"
              target="_blank"
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon />
            </a>
          </li>
        )}
        {/* GitHub */}
        {github && (
          <li role="listitem">
            <a
              href={github}
              rel="noopener noreferrer"
              target="_blank"
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon />
            </a>
          </li>
        )}
        {/* StackOverflow */}
        {stackoverflow && (
          <li role="listitem">
            <a
              href={stackoverflow}
              rel="noopener noreferrer"
              target="_blank"
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Visit StackOverflow profile (opens in new tab)"
            >
              <span className="sr-only">StackOverflow</span>
              <StackOverflowIcon />
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

export default SocialLinksSection;
