import React, { useState } from 'react';
import { ProjectSlideShow } from './ProjectSlideShow';
import ProjectMobile from './ProjectMobile';
import { ProjectAccomplishments } from './ProjectAccomplishments';
import { ProjectTech } from './ProjectTech';
import { OtherProjects } from './OtherProjects';
import { wrap } from 'popmotion';
import { randomizeProjects } from '@utils/ProjectPageUtil';
import { variant } from '@lib/variants';
import { ProjectsButton } from '@components/ProjectsButton';
import ProjectInfo from './ProjectInfo';
import { IProject } from '@utils/types';

const ProjectPageComp = ({
  projectInfo: {
    title,
    link,
    imgUrl,
    desc,
    repo,
    accomplishments,
    technologies,
    type,
  },
  otherProjects,
}: {
  projectInfo: IProject;
  otherProjects: IProject[];
}) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const imageIndex = wrap(0, imgUrl.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <section className='relative flex flex-col-reverse items-center xl:flex-row border-dashed border-b-2 border-[#399AF6] pb-7'>
        {type === 'web' ? (
          <>
            <ProjectSlideShow
              images={imgUrl}
              divVariant={variant}
              page={page}
              paginate={paginate}
              direction={direction}
              imageIndex={imageIndex}
            />
          </>
        ) : (
          <ProjectMobile
            divVariant={variant}
            title={title}
            imgUrl={imgUrl[0]}
          />
        )}
        <ProjectInfo title={title} desc={desc} link={link} repo={repo} />
      </section>
      <section className='flex flex-col items-center xl:flex-row mt-4 border-dashed border-b-2 border-[#399AF6]'>
        <ProjectAccomplishments accomplishments={accomplishments} />
        <ProjectTech tech={technologies} />
      </section>
      <aside className='my-4 flex flex-col items-center w-full'>
        <OtherProjects projects={randomizeProjects(otherProjects)} />
        <ProjectsButton />
      </aside>
    </div>
  );
};

export default ProjectPageComp;
