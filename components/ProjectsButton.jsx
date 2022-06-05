import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export const ProjectsButton = () => {
  return (
    <Link href='/projects'>
      <a href='#'>
        <button
          className='flex space-x-5 px-8 py-4 rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] shadow-lg text-xl font-semibold  items-center text-white mt-4'
          type='button'
        >
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            className='bi bi-arrow-up-right-square'
            stroke='6'
            strokeWidth='6'
            viewBox='0 0 16 16'
          >
            <motion.path
              fillRule='evenodd'
              initial='hidden'
              animate='visible'
              transition={{ delay: 1, duration: 0.2 }}
              variants={{
                hidden: {
                  pathLength: 0,
                  fill: 'rgba(255, 255, 255, 0)',
                },
                visible: {
                  pathLength: 1,
                  fill: 'rgba(255, 255, 255, 1)',
                },
              }}
              d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
            />
          </motion.svg>
          <p>See All Projects</p>
        </button>
      </a>
    </Link>
  );
};
