import React from 'react';
import ProjectButton from './ProjectButton';

const ProjectInfo = ({
  title,
  desc,
  link,
  repo,
}: {
  title: string;
  desc: string;
  link: string;
  repo: string;
}) => {
  return (
    <div className='flex-[45%] flex flex-col items-center justify-between min-h-[353px] h-[353px] px-0 xs:px-2 sm:px-5 md:px-20 lg:px-30 xl:px-0'>
      <h1 className='text-2xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-4xl md:ml-[37px] bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md p-2 font-bold'>
        {title}
      </h1>
      <p className='text-center leading-8 text-base xs:text-lg md:text-xl xl:text-lg md:ml-[37px]'>
        {desc}
      </p>
      <aside className='flex flex-col w-full md:pl-[37px]'>
        <ProjectButton url={link} linkType='globe' />
        <ProjectButton url={repo} linkType='github' />
      </aside>
    </div>
  );
};

export default ProjectInfo;
