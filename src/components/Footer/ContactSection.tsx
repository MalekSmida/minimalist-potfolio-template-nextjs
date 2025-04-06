interface PropsContactSection {
  email?: string;
  address?: string;
  phone?: string;
  googleMapsLink?: string;
}

/**
 * ContactSection component renders a section with contact information including email, physical address,
 * and phone number.
 *
 * @example
 * // With all contact methods
 * <ContactSection
 *   email="contact@example.com"
 *   address="123 Main Street, City, Country"
 *   phone="+1 (555) 123-4567"
 *   googleMapsLink="https://goo.gl/maps/example"
 * />
 *
 * @example
 * // With only email
 * <ContactSection email="contact@example.com" />
 *
 * @accessibility
 * - Each contact method has appropriate aria-label attributes for screen readers
 * - SVG icons include aria-hidden="true" to prevent them from being announced by screen readers
 * - The list structure uses semantic HTML with role="list" and role="listitem" attributes
 * - Contact information is properly labeled with a heading
 * - Links have descriptive text and proper focus states
 * - Interactive elements are keyboard accessible
 */
const ContactSection: React.FC<PropsContactSection> = ({
  email,
  address,
  phone,
  googleMapsLink,
}) => {
  // Break when empty props
  if (!email && !address && !phone) return;

  return (
    <section className="flex flex-col items-center" id="contact" aria-labelledby="contact-heading">
      <h3 id="contact-heading" className="my-2 font-medium">
        Contact
      </h3>
      <ul
        className="my-2 flex flex-col items-center font-light"
        role="list"
        aria-label="Contact information"
      >
        {/* Email */}
        {email && (
          <li role="listitem">
            <a
              href={`mailto:${email}`}
              aria-label={`Send an email to ${email}`}
              className="group flex items-center gap-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="transition group-hover:text-white/75">{email}</span>
            </a>
          </li>
        )}
        {/* Address */}
        {address && googleMapsLink && (
          <li role="listitem">
            <a
              href={googleMapsLink || 'https://www.google.com/maps'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label={`View address on Google Maps: ${address}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="transition group-hover:text-white/75">{address}</span>
            </a>
          </li>
        )}
        {/* Phone */}
        {phone && (
          <li role="listitem">
            <a
              href={`tel:${phone}`}
              className="group flex items-center gap-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label={`Call phone number: ${phone}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="transition group-hover:text-white/75">{phone}</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};
export default ContactSection;
