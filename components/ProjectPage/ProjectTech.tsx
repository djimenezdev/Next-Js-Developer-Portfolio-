import userData, { iconColors } from '@constants/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

export const ProjectTech = ({ tech }: { tech: string[] }) => {
  const getTech = tech.map((technology) => userData?.techStack[technology]);
  return (
    <div className='flex-[42%] flex flex-col items-center'>
      <h1 className='text-3xl xs:text-4xl text-center bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md p-2 font-bold'>
        Tech Stack
      </h1>
      <section className='flex flex-row flex-wrap mt-2 w-full justify-center'>
        {getTech.map((technology, i) =>
          technology.startsWith('https') ? (
            <div
              className={`flex justify-center items-center mx-2 xss:mx-4 my-4`}
              key={i}
            >
              <Image
                src={technology}
                width={80}
                height={80}
                className='rounded-sm'
              />
            </div>
          ) : (
            <div
              className={`flex justify-center items-center mx-2 xss:mx-4 my-4`}
              key={i}
            >
              <FontAwesomeIcon
                icon={technology}
                size='5x'
                color={
                  iconColors[
                    Object.keys(userData?.techStack).filter(
                      (key) => userData?.techStack[key] === technology
                    )[0]
                  ]
                }
              />
            </div>
          )
        )}
      </section>
    </div>
  );
};
