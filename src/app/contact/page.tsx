// local files
import { getContactData } from '@/services';

const ContactCard = ({
  href,
  title,
  icon,
  description,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
}) => {
  const isExternalLink = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternalLink ? '_blank' : '_self'}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      className="block transform transition-transform duration-200 hover:scale-101"
      aria-label={`${title}: ${isExternalLink ? ' (opens in new tab)' : ''}`}
    >
      <div className="group flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors duration-300 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
          )}
        </div>
        {href && (
          <div className="text-gray-400 transition-colors duration-300 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        )}
      </div>
    </a>
  );
};

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
    <div className="my-22 grid w-full grid-cols-1 lg:grid-cols-2">
      {/* Hero Section */}
      <section className="p-4 text-center lg:p-8 lg:text-start" aria-labelledby="contact-heading">
        <h1 id="profile-heading" className="my-2 text-2xl font-bold sm:text-3xl lg:my-4">
          Get In Touch 👋
        </h1>
        <p className="mx-auto my-4 max-w-md text-gray-600 lg:mx-0 dark:text-gray-200">
          Hiring for a consulting role or freelance work? Or even just to say hi, you can reach me
          through these channels.
        </p>
      </section>

      {/* Contact Methods Section */}

      <section
        className="flex flex-col gap-2 p-4 lg:gap-4"
        aria-labelledby="contact-methods-heading"
      >
        {/* Email */}
        {contact.email && (
          <ContactCard
            href={`mailto:${contact.email}`}
            title="Email"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            description="Send me an email"
          />
        )}

        {/* Phone */}
        {contact.phone && (
          <ContactCard
            href={`tel:${contact.phone}`}
            title="Phone"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
            description="Send me a whatsapp message"
          />
        )}

        {/* LinkedIn */}
        {links.linkedin && (
          <ContactCard
            href={links.linkedin}
            title="LinkedIn"
            icon={
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            }
            description="Send me a message on LinkedIn"
          />
        )}
      </section>
    </div>
  );
};

export default Contact;
