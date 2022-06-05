import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectButton = ({
  url,
  linkType,
}: {
  url: string;
  linkType: string;
}) => {
  return (
    <a href={url} target='_blank'>
      <button
        type='button'
        className={`flex justify-center items-center text-white  w-full ${
          linkType === 'globe'
            ? 'bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] mb-4'
            : 'bg-black'
        } h-12 rounded-md font-semibold`}
      >
        <FontAwesomeIcon
          className='mr-2 text-xl'
          icon={linkType === 'globe' ? 'globe' : ['fab', 'github']}
        />
        {linkType === 'globe' ? 'Checkout Live Project' : 'Github Repo'}
      </button>
    </a>
  );
};

export default ProjectButton;
