import SmallCard from '@components/FavProjects/SmallCard';
import { IProject } from '@utils/types';
import React from 'react';

export const OtherProjects = ({ projects }: { projects: IProject[] }) => {
  return (
    <div className='flex  flex-col items-center'>
      <h1 className='text-4xl  mb-4 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md p-2 font-bold'>
        Other Projects
      </h1>
      <section className='flex flex-wrap justify-center'>
        {projects.map(({ title, imgUrl, route }) => (
          <SmallCard
            title={title}
            imageUrl={imgUrl}
            route={route}
            isOther
            key={imgUrl[0] + route}
          />
        ))}
      </section>
    </div>
  );
};
