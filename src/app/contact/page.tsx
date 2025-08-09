// local files
import { getContactData } from '@/services';
import { ContactCard, ButtonLink } from '@/components';
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  StackOverflowIcon,
} from '@/assets/svgIcons';

/**
 * Contact Page Component
 *
 * Displays contact information and links in a minimalist design following
 * the established patterns from other pages. Features a hero section and
 * organized contact methods as prominent CTAs.
 */
const Contact: React.FC = async () => {
  // Fetch data from Gists using services
  const contactData = await getContactData();

  // Break when empty data
  if (!contactData.contact || !contactData.links) return;

  const { contact, links } = contactData;

  return (
    <div className="mx-auto my-22 grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Hero Section */}
      <section className="p-4 text-center lg:p-8 lg:text-start" aria-labelledby="contact-heading">
        <h1 id="contact-heading" className="my-2 text-2xl font-bold sm:text-3xl lg:my-4">
          Get In Touch 👋
        </h1>
        <p className="mx-auto my-4 max-w-md text-gray-600 lg:mx-0 dark:text-gray-200">
          Hiring for a consulting role or freelance work? Or even just to say hi, you can reach me
          through these channels.
        </p>

        {/* CV Download Button */}
        {links?.cvPdf && (
          <div className="mt-6 lg:mt-8">
            <ButtonLink
              link={links.cvPdf}
              label="Download CV"
              ariaLabel="Download my CV in PDF format"
              isPrimary={true}
            />
          </div>
        )}
      </section>

      {/* Contact Methods Section */}
      <section
        className="flex flex-col gap-4 p-4 lg:gap-6"
        aria-labelledby="contact-methods-heading"
      >
        <h2 className="sr-only" id="contact-methods-heading">
          Contact Methods
        </h2>
        {/* Email */}
        {contact.email && (
          <ContactCard
            href={`mailto:${contact.email}`}
            title="Email"
            icon={<EmailIcon />}
            description="Send me an email"
          />
        )}

        {/* Phone */}
        {contact.phone && (
          <ContactCard
            href={`tel:${contact.phone}`}
            title="Phone"
            icon={<PhoneIcon />}
            description="Send me a whatsapp message"
          />
        )}

        {/* LinkedIn */}
        {links.linkedin && (
          <ContactCard
            href={links.linkedin}
            title="LinkedIn"
            icon={<LinkedinIcon />}
            description="Connect with me on LinkedIn"
          />
        )}

        {/* GitHub */}
        {links.github && (
          <ContactCard
            href={links.github}
            title="GitHub"
            icon={<GithubIcon />}
            description="View my code repositories"
          />
        )}

        {/* Stack Overflow */}
        {links.stackoverflow && (
          <ContactCard
            href={links.stackoverflow}
            title="Stack Overflow"
            icon={<StackOverflowIcon />}
            description="See my Stack Overflow profile"
          />
        )}
      </section>
    </div>
  );
};

export default Contact;
