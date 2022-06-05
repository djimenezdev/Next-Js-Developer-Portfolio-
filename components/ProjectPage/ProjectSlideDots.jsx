import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from 'framer-motion';

export const ProjectSlideDots = ({
  images,
  imageIndex,
  paginate,
  divVariant,
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
              icon='fa-solid fa-circle'
              size='1x'
              color='white'
            />
          ) : (
            <FontAwesomeIcon
              key={i}
              className='mr-1 cursor-pointer'
              icon='fa-regular fa-circle'
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
