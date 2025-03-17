import Image from 'next/image';

interface PropsAbout {
  name: string;
  aboutDescription: string;
  educationList: string[];
  interestList: string[];
}

const About: React.FC<PropsAbout> = ({
  name = 'No body',
  aboutDescription,
  educationList,
  interestList,
}) => {
  return (
    <section className="grid grid-cols-1 px-4 py-16 lg:grid-cols-2">
      {/* Image section*/}
      <div className="flex flex-col items-center justify-center lg:py-16">
        <Image
          src="/images/guitar-player.svg"
          alt="Guitar Player"
          height={500}
          width={500}
          loading="lazy"
        />
      </div>

      {/* About me */}
      <div className="relative flex items-center bg-gray-50">
        <div className="xl:text-md p-8 text-sm sm:p-16 lg:p-24">
          <h2 className="mb-3 text-2xl font-bold sm:mb-6 sm:text-3xl">Hello, I&apos;m {name} 👋</h2>

          {aboutDescription && (
            <p className="list-disc space-y-2 text-gray-600">{aboutDescription}</p>
          )}

          {educationList.length && (
            <>
              <h3 className="mt-7 text-xl font-bold">Education & Continuous Learning</h3>
              <ul className="mt-3 list-disc space-y-2 text-gray-600">
                {educationList?.map((education) => <li key={education}>{education}</li>)}
              </ul>
            </>
          )}

          {interestList.length && (
            <>
              <h3 className="mt-7 text-xl font-bold">Personal Interests</h3>
              <ul className="mt-3 space-y-1 text-gray-600">
                {interestList?.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
