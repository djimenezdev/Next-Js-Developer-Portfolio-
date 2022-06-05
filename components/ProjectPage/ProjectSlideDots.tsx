import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from 'framer-motion';
import { IVariant } from '@utils/types';

export const ProjectSlideDots = ({
  images,
  imageIndex,
  paginate,
  divVariant,
}: {
  images: string[];
  imageIndex: number;
  paginate: (newDirection: number) => void;
  divVariant: { hidden: IVariant; visible: IVariant };
}) => {
  return (
    <motion.aside
      initial='hidden'
      animate='visible'
      variants={divVariant}
      transition={{ duration: 1.4 }}
      className='relative top-2'
    >
      <div>
        {images.map((img, i) =>
          i === imageIndex ? (
            <FontAwesomeIcon
              key={i}
              className='mr-1 cursor-pointer'
              icon={['fas', 'circle']}
              size='1x'
              color='white'
            />
          ) : (
            <FontAwesomeIcon
              key={i}
              className='mr-1 cursor-pointer'
              icon={['far', 'circle']}
              size='1x'
              color='white'
              onClick={() => {
                if (i > imageIndex) {
                  paginate(i - imageIndex);
                } else {
                  paginate(-(imageIndex - i));
                }
              }}
            />
          )
        )}
      </div>
    </motion.aside>
  );
};
