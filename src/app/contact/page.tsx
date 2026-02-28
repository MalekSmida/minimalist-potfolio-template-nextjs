// local files
import { getContactData } from '@/services';
import { ButtonLink, ContactCard } from '@/components';
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  StackOverflowIcon,
  WorkIcon,
} from '@/assets/svgIcons';

// Force static generation for SSR
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

/**
 * Contact Page Component
 *
 * Two-card layout: "Work with me" and "Get in touch" as primary paths,
 * with secondary contact methods below.
 */
const Contact: React.FC = async () => {
  // Fetch data from Gists using services
  const contactData = await getContactData();

  // Break when empty data
  if (!contactData.contact || !contactData.links) return;

  const { contact, links } = contactData;

  return (
    <div className="mx-auto my-22 w-full max-w-6xl">
      {/* Hero Section */}
      <section className="p-4 text-center lg:p-8" aria-labelledby="contact-heading">
        <h1 id="contact-heading" className="my-2 text-2xl font-bold sm:text-3xl lg:my-4">
          Get In Touch
        </h1>
        <p className="mx-auto my-4 max-w-md text-gray-600 dark:text-gray-200">
          Whether you need consulting help or just want to connect, choose the path that fits.
        </p>
      </section>

      {/* Two-card primary paths */}
      <section
        className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 lg:gap-12"
        aria-label="Primary contact options"
      >
        {/* Work With Me card */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto h-10 w-10 text-gray-700 dark:text-gray-300">
            <WorkIcon />
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Work With Me</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Looking for a tech lead, performance audit, or AI consulting?
          </p>
          {links.booking && (
            <div className="mt-6">
              <ButtonLink
                link={links.booking}
                label="Book a discovery call"
                ariaLabel="Book a discovery call on Bedupath (opens in new tab)"
                isPrimary
              />
            </div>
          )}
        </div>

        {/* Get In Touch card */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto h-10 w-10 text-gray-700 dark:text-gray-300">
            <EmailIcon />
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Say hi</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            For speaking, open source, or just to say hi
          </p>
          {contact.email && (
            <div className="mt-6">
              <ButtonLink
                link={`mailto:${contact.email}`}
                label="Send me an email"
                ariaLabel="Send an email"
                isPrimary
              />
            </div>
          )}
        </div>
      </section>

      {/* Secondary contact methods - icon row */}
      <section
        className="flex flex-wrap items-center justify-center gap-6 p-4 pt-8"
        aria-label="Other contact methods"
      >
        <h2 className="sr-only" id="contact-methods-heading">
          Contact Methods
        </h2>
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
      {/* CV Download Button */}
      {links?.cvPdf && (
        <p className="mt-6 text-center text-gray-600 lg:mx-0 dark:text-gray-300">
          You can download my CV PDF using{'  '}
          <a
            href={links.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-secondary font-medium underline"
            aria-label={`Download my resume (opens in new tab)`}
          >
            this link
          </a>
        </p>
      )}
    </div>
  );
};

export default Contact;
