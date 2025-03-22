interface PropsCopyrightSection {
  /**
   * Optional URL to the GitHub repository for this project.
   * When provided, displays a "Fork it" link that opens the repository in a new tab.
   */
  githubRepoLink?: string;
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
 * <CopyrightSection githubRepoLink="https://github.com/user/portfolio" />
 *
 */
const CopyrightSection: React.FC<PropsCopyrightSection> = ({ githubRepoLink }) => {
  return (
    <section>
      <p className="text-center text-sm text-gray-400">
        &copy; 2025 Malek Smida
        {githubRepoLink && (
          <>
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Github repository for this open source portfolio"
              className="mr-1 ml-2 cursor-pointer text-white underline"
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
