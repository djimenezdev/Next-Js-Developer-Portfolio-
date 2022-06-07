import React from 'react';

export const ProjectAccomplishments = ({
  accomplishments,
}: {
  accomplishments: string[];
}) => {
  return (
    <div className='flex-[58%] flex flex-col mb-5 xl:mb-0 px-10 md:px-0'>
      <h1 className='text-3xl xs:text-4xl text-center mb-4 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md p-2 font-bold'>
        Accomplishments
      </h1>
      <ul className='list-disc text-base md:text-lg'>
        {accomplishments?.map((accomplishment, i) => (
          <li key={i} className='mb-2'>
            {accomplishment}
          </li>
        ))}
      </ul>
    </div>
  );
};
