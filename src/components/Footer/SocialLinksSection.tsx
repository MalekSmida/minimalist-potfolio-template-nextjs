interface PropsSocialLinksSection {
  linkedinProfile?: string;
  githubProfile?: string;
  stackoverflowProfile?: string;
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
 *   linkedinProfile="https://linkedin.com/in/username"
 *   githubProfile="https://github.com/username"
 *   stackoverflowProfile="https://stackoverflow.com/users/123/username"
 * />
 */
const SocialLinksSection: React.FC<PropsSocialLinksSection> = ({
  linkedinProfile,
  githubProfile,
  stackoverflowProfile,
}) => {
  // break when empty props
  if (!linkedinProfile && !githubProfile && !stackoverflowProfile) return;

  return (
    <section aria-label="Social media links">
      <ul
        className="flex items-center gap-6 md:gap-8"
        role="list"
        aria-label="Social media profiles"
      >
        {/* Linkedin */}
        {linkedinProfile && (
          <li role="listitem">
            <a
              href={linkedinProfile}
              rel="noopener noreferrer"
              target="_blank"
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
        )}
        {/* GitHub */}
        {githubProfile && (
          <li role="listitem">
            <a
              href={githubProfile}
              rel="noopener noreferrer"
              target="_blank"
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        )}
        {/* StackOverflow */}
        {stackoverflowProfile && (
          <li role="listitem">
            <a
              href={stackoverflowProfile}
              rel="noopener noreferrer"
              target="_blank"
              className="transition hover:text-white/75 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Visit StackOverflow profile (opens in new tab)"
            >
              <span className="sr-only">StackOverflow</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.35 1.623 9.335 1.991-.35zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
              </svg>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};

export default SocialLinksSection;
