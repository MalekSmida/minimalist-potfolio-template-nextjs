// local files
import { ButtonLink } from '@/components';
import ConsultingCard from '@/components/ConsultingCard';
import { getConsultingData } from '@/services';

// Force static generation for SSR
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

const Consulting: React.FC = async () => {
  // Fetch data from Gists using services
  const { descriptionList, serviceList } = await getConsultingData();

  // break when empty props
  if (!descriptionList?.length && !serviceList?.length) return;

  return (
    <div className="my-10">
      {/* Hero Section */}
      <section className="rounded-lg bg-gradient-to-br from-amber-50 to-white px-6 py-12 sm:px-8 lg:px-12 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl lg:my-4">Consulting Services</h1>
          <div className="mx-auto mt-6 max-w-2xl">
            {descriptionList?.map((description, index) => (
              <p key={index} className="leading-relaxed text-gray-600 dark:text-gray-300">
                {description}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink
              link="/contact"
              label="Lets discuss your needs"
              ariaLabel="Link to contact page"
              isNavigation
              isPrimary
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2
              id="services-heading"
              className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white"
            >
              Available Services
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Choose the service that best fits your project needs
            </p>
          </div>

          {serviceList?.length && (
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {serviceList.map((service) => (
                <ConsultingCard
                  key={service._id}
                  _id={service._id}
                  name={service.name}
                  prices={service.prices}
                  tasks={service.tasks}
                  achievements={service.achievements}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="rounded-lg bg-gray-50 px-6 py-16 sm:px-8 lg:px-12 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:my-4">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Let&apos;s discuss your project and find the perfect solution for your needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink
              link="/contact"
              label="Contact Me"
              ariaLabel="Link to contact page"
              isNavigation
              isPrimary
            />
            <ButtonLink
              link="/career"
              label="View My Experience"
              ariaLabel="Link to career page"
              isNavigation
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
