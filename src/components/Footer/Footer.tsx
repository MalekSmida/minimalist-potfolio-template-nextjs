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
    <footer className="flex w-full flex-col items-center bg-gray-900 p-4 text-white sm:p-6 lg:p-8 dark:bg-gray-950">
      <ContactSection
        email={email}
        address={address}
        phone={phone}
        googleMapsLink={googleMapsLink}
      />

      <SocialLinksSection linkedinProfile={linkedinProfile} githubProfile={githubProfile} />

      <hr className="my-4 h-0.5 w-full bg-gray-800 opacity-5"></hr>

      <CopyrightSection githubRepository={githubRepository} />
    </footer>
  );
};

export default Footer;
