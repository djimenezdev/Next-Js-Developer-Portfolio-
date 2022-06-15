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
import { IVariant } from '@utils/types';
import Image from 'next/image';
import { toBase64 } from '@constants/data';
import { shimmer } from '@components/Shimmer';

export type IProjectSlideShow = {
  images: string[];
  divVariant: { hidden: IVariant; visible: IVariant };
  page: number;
  paginate: (newDirection: number) => void;
  direction: number;
  imageIndex: number;
};

export const ProjectSlideShow = ({
  images,
  divVariant,
  page,
  paginate,
  direction,
  imageIndex,
}: IProjectSlideShow) => {
  const [arrows, setArrows] = useState<boolean>(false);

  const arrowsTimer = (action: string) => {
    let timeout: any;
    if (action === 'reset') {
      setArrows(false);
    } else {
      // clears timeout if they hover over before timeout executes to reduce render issues
      clearTimeout(timeout);
      setArrows(true);
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
        <motion.div
          className='absolute rounded-md mb-4 image_sty cursor-pointer w-full h-full'
          key={page}
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
        >
          <Image
            src={images[imageIndex]}
            layout='fill'
            alt='slide'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </motion.div>
      </AnimatePresence>

      <>
        <motion.div
          initial='hidden'
          animate={arrows ? 'visible' : 'hidden'}
          variants={divVariant}
          transition={{ duration: 0.4 }}
          className='next absolute right-[4px] text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-[30px] w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold text-lg z-[2]'
          onClick={() => paginate(1)}
        >
          <FontAwesomeIcon icon='chevron-right' />
        </motion.div>
        <motion.div
          initial='hidden'
          animate={arrows ? 'visible' : 'hidden'}
          variants={divVariant}
          transition={{ duration: 0.4 }}
          className='prev absolute left-[4px] text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-[30px] w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-bold text-lg z-[2]'
          onClick={() => paginate(-1)}
        >
          <FontAwesomeIcon icon='chevron-left' />
        </motion.div>
      </>

      <ProjectSlideDots
        images={images}
        divVariant={divVariant}
        imageIndex={imageIndex}
        paginate={paginate}
      />
    </motion.div>
  );
};
