// local files
import ContactSection from './ContactSection';
import SocialLinksSection from './SocialLinksSection';
import CopyrightSection from './CopyrightSection';

interface PropsFooter {
  email?: string;
  address?: string;
  phone?: string;
  googleMapsLinkForAddress?: string;
  linkedinLink?: string;
  githubLink?: string;
  githubRepoLink?: string;
}

const Footer: React.FC<PropsFooter> = ({
  email,
  address,
  phone,
  googleMapsLinkForAddress,
  linkedinLink,
  githubLink,
  githubRepoLink,
}) => {
  return (
    <footer className="flex w-full flex-col items-center bg-gray-900 p-4 text-white sm:p-6 lg:p-8 dark:bg-gray-950">
      <ContactSection
        email={email}
        address={address}
        phone={phone}
        googleMapsLinkForAddress={googleMapsLinkForAddress}
      />

      <SocialLinksSection linkedinLink={linkedinLink} githubLink={githubLink} />

      <hr className="my-4 h-0.5 w-full bg-gray-800 opacity-5"></hr>

      <CopyrightSection githubRepoLink={githubRepoLink} />
    </footer>
  );
};

export default Footer;
