import { iconColors } from '@constants/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
const AboutTech = ({
  user,
}: {
  user: { about: { description: string[] }; techStack: any };
}) => {
  return (
    <div className='col-span-1 md:col-span-2'>
      {user.about.description?.map((desc, idx) => (
        <p key={idx} className='text-xl text-gray-700 mb-4 dark:text-gray-300 '>
          {desc}
        </p>
      ))}

      <h1 className='bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md text-3xl  px-2 py-1 md:inline-block font-bold text-gray-50'>
        Tech Stack
      </h1>
      <div className='flex flex-row flex-wrap mt-8 md:justify-center'>
        {Object.values(user?.techStack).map((val: string, i) =>
          val.startsWith('https') ? (
            <div className={`mx-4 my-4 `} key={i}>
              <Image src={val} width={80} height={80} className='rounded-sm' />
            </div>
          ) : (
            <div className={`mx-4 my-2`} key={i}>
              <FontAwesomeIcon
                icon={['fab', val]}
                size='6x'
                color={
                  iconColors[
                    Object.keys(user?.techStack).filter(
                      (key) => user?.techStack[key] === val
                    )[0]
                  ]
                }
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AboutTech;
