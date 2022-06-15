import userData from '@constants/data';
import { IProject } from '@utils/types';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  return (
    <>
      <header className=' max-w-6xl -mb-5 md:mb-0 mx-auto  bg-white dark:bg-gray-800'>
        <h1 className='text-5xl md:text-9xl  font-bold text-center md:text-left'>
          Projects
        </h1>
      </header>
      {/* Grid starts here */}
      <section className='bg-[#F1F1F1] dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto px-5  xl:px-0  grid grid-cols-1 md:grid-cols-2 gap-8 pt-10'>
          {userData.projects.map((proj: IProject, idx: number) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              imgUrl={proj.imgUrl[0]}
              number={`${idx + 1}`}
              route={proj.route}
            />
          ))}
        </div>
      </section>
    </>
  );
}
