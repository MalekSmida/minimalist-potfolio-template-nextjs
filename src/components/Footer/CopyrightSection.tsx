interface PropsCopyrightSection {
  /**
   * Optional URL to the GitHub repository for this project.
   * When provided, displays a "Fork it" link that opens the repository in a new tab.
   */
  githubRepository?: string;
}

/**
 * CopyrightSection Component displays copyright information and optionally a link to the GitHub repository.
 *
 * @example
 * // Basic usage with only copyright text
 * <CopyrightSection />
 *
 * @example
 * // With GitHub repository link
 * <CopyrightSection githubRepository="https://github.com/user/portfolio" />
 *
 * @accessibility
 * - Copyright information is properly structured with semantic HTML
 * - Links have descriptive text and proper focus states
 * - Hidden attribution text is provided for screen readers
 * - Interactive elements are keyboard accessible
 */
const CopyrightSection: React.FC<PropsCopyrightSection> = ({ githubRepository }) => {
  return (
    <section aria-label="Copyright information">
      <p className="text-center text-sm text-gray-400">
        &copy; 2025 Malek Smida
        {githubRepository && (
          <>
            <a
              href={githubRepository}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1 ml-2 cursor-pointer text-white underline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Fork this portfolio template on GitHub (opens in new tab)"
            >
              Fork it
            </a>
            <span> and create yours ✨</span>
          </>
        )}
      </p>
      <span className="sr-only">
        Thanks to https://www.hyperui.dev/ : Some components and animations used in this portfolio
        are inspired from it.
      </span>
    </section>
  );
};

export default CopyrightSection;
