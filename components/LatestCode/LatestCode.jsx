import userData from '@constants/data';
import { GithubRepoCard } from './GitHubRepoCard';

export default function LatestCode({ repositories }) {
  return (
    <section className='bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center pt-24 mx-10 md:my-12'>
          <h1 className='text-6xl lg:text-9xl max-w-lg font-bold text-gray-700 my-10 md:my-0 dark:text-white text-center lg:text-left'>
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className='mb-10 md:mb-0 px-8 py-4 rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-up-right-square'
              stroke='4'
              strokeWidth='4'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-5 lg:-mt-10 gap-y-10 md:pt-8'>
        {/* Single github Repo */}

        {repositories &&
          repositories.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key={idx} />
          ))}
      </div>
    </section>
  );
}
