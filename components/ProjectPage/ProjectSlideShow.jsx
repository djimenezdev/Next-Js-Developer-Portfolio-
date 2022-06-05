import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import {
  swipeConfidenceThreshold,
  swipePower,
  variants,
} from '@utils/slideshow';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectSlideDots } from './ProjectSlideDots';

export const ProjectSlideShow = ({
  images,
  divVariant,
  page,
  paginate,
  direction,
  imageIndex,
}) => {
  const [arrows, setArrows] = useState(false);
  const [ani, setAni] = useState(false);

  const arrowsTimer = (action) => {
    let timeout;
    if (action === 'reset') {
      setAni(false);
      timeout = setTimeout(() => {
        setArrows(false);
        clearTimeout(timeout);
      }, 400);
    } else {
      // clears timeout if they hover over before timeout executes to reduce render issues
      clearTimeout(timeout);
      setArrows(true);
      setAni(true);
    }
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={divVariant}
      transition={{ duration: 1.4 }}
      className='relative ml-2 md:ml-10 mt-10 xl:mt-0 xl:ml-0 w-[310px] xs:w-[400px] sm:w-[550px] md:w-[650px] lg:w-[770px] h-[180px] xs:h-[220px]  sm:h-[300px] md:h-[350px] lg:h-[415px] xl:h-[383px]  xl:w-full xl:flex-[55%] py-1 flex flex-col  justify-end  overflow-hidden items-center'
      onMouseOver={() => arrowsTimer('no reset')}
      onMouseLeave={() => arrowsTimer('reset')}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className='absolute rounded-md mb-4 image_sty'
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 70 },
            opacity: { duration: 0.6 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      {arrows && (
        <>
          <motion.div
            initial='hidden'
            animate={ani ? 'visible' : 'hidden'}
            variants={divVariant}
            transition={{ duration: 0.4 }}
            className='next absolute right-[4px] text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-[30px] w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold text-lg z-[2]'
            onClick={() => paginate(1)}
          >
            <FontAwesomeIcon icon='fa-solid fa-chevron-right' />
          </motion.div>
          <motion.div
            initial='hidden'
            animate={ani ? 'visible' : 'hidden'}
            variants={divVariant}
            transition={{ duration: 0.4 }}
            className='prev absolute left-[4px] text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-[30px] w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold text-lg z-[2]'
            onClick={() => paginate(-1)}
          >
            <FontAwesomeIcon icon='fa-solid fa-chevron-left' />
          </motion.div>
        </>
      )}
      <ProjectSlideDots
        images={images}
        divVariant={divVariant}
        imageIndex={imageIndex}
        paginate={paginate}
      />
    </motion.div>
  );
};
