interface PropsCopyrightSection {
  githubRepo?: string;
}

const CopyrightSection: React.FC<PropsCopyrightSection> = ({ githubRepo }) => {
  return (
    <section>
      <p className="text-center text-sm text-gray-400">
        &copy; 2025 Malek Smida
        {githubRepo && (
          <>
            <a
              href={githubRepo}
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
