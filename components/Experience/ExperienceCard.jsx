import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';

export const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
  logo,
}) => {
  const { theme } = useTheme();
  const [tooltip, setTooltip] = useState(false);

  return (
    <section className='relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4'>
      <h1 className='absolute -top-10 md:-left-10 md:-top-10 text-4xl text-black font-bold dark:text-white'>
        {year}
      </h1>
      <header className='w-full flex justify-between items-center'>
        <div>
          <h1 className='font-semibold text-xl'>{title}</h1>
          <div
            className='relative z-20'
            onMouseOver={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
          >
            <div
              className={`absolute flex justify-center -bottom-12 w-[230px] left-8 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] p-2 rounded-md font-bold ${
                tooltip ? 'visible' : 'hidden'
              }`}
            >
              Company Site Url
            </div>
            <a
              href={companyLink}
              className='inline-block text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md mt-1/2 p-1 font-bold'
            >
              <div className='flex items-center'>
                <FontAwesomeIcon
                  className='mr-2 text-xl'
                  icon='fa-solid fa-globe'
                />
                <span>{company}</span>
              </div>
            </a>
          </div>
        </div>
        <aside
          className={`relative ${
            title === 'Blockchain Developer'
              ? 'w-[140px] h-[30px]'
              : title === 'Freelancer'
              ? 'w-[100px] h-[70px]'
              : 'h-[50px] w-[50px] '
          } ml-3`}
        >
          {title !== 'Freelancer' ? (
            <Image src={logo} layout='fill' alt={title + ' ' + 'logo'} />
          ) : (
            <Image
              src={theme === 'light' ? logo[1] : logo[0]}
              layout='fill'
              alt={title + ' ' + 'logo'}
            />
          )}
        </aside>
      </header>
      <p className='text-gray-600 dark:text-gray-400 my-2'>{desc}</p>
    </section>
  );
};
