// local files
import ContactSection from './ContactSection';
import SocialLinksSection from './SocialLinksSection';
import CopyrightSection from './CopyrightSection';

interface PropsFooter {
  email?: string;
  address?: string;
  phone?: string;
  googleMapsURLForAddress?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  githubRepo?: string;
}

const Footer: React.FC<PropsFooter> = ({
  email,
  address,
  phone,
  googleMapsURLForAddress,
  linkedinUrl,
  githubUrl,
  githubRepo,
}) => {
  return (
    <footer className="flex w-full flex-col items-center bg-gray-900 p-4 text-white sm:p-6 lg:p-8 dark:bg-gray-950">
      <ContactSection
        email={email}
        address={address}
        phone={phone}
        googleMapsURLForAddress={googleMapsURLForAddress}
      />

      <SocialLinksSection linkedinUrl={linkedinUrl} githubUrl={githubUrl} />

      <hr className="my-4 h-0.5 w-full bg-gray-800 opacity-5"></hr>

      <CopyrightSection githubRepo={githubRepo} />
    </footer>
  );
};

export default Footer;
