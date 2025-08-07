// local files
import ConsultingCard from '@/components/ConsultingCard';
import { getConsultingData } from '@/services';

const Consulting: React.FC = async () => {
  // Fetch data from Gists using services
  const { descriptionList, serviceList } = await getConsultingData();

  // break when empty props
  if (!descriptionList?.length && !serviceList?.length) return;

  return (
    <section className="relative my-10 w-full px-8" aria-labelledby="career-heading" id="career">
      <h1 id="career-heading" className="my-4 text-2xl font-bold sm:text-3xl">
        My consulting services
      </h1>

      {descriptionList?.map((description, index) => (
        <p key={index} className="mt-1 text-gray-600 dark:text-gray-200">
          {description}
        </p>
      ))}

      {serviceList?.length && (
        <div className="mt-6 flex flex-col gap-6 md:mt-12 md:gap-8">
          {serviceList.map((service) => (
            <ConsultingCard
              key={service._id}
              _id={service._id}
              name={service.name}
              price={service.price}
              tasks={service.tasks}
              achievements={service.achievements}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Consulting;
