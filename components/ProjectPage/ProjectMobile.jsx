import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectMobile = ({ divVariant, title, imgUrl }) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={divVariant}
      transition={{ duration: 1.4 }}
      className='relative ml-2 md:ml-10 mt-10 xl:mt-0 xl:ml-0 w-[310px] xs:w-[400px] sm:w-[550px] md:w-[650px] lg:w-[770px] h-[180px] xs:h-[220px]  sm:h-[300px] md:h-[350px] lg:h-[415px] xl:h-[353px]  xl:w-full xl:flex-[55%]'
    >
      <Image
        className='rounded-md'
        src={imgUrl}
        layout='fill'
        priority={true}
        alt={`${title} project thumbnail`}
      />
    </motion.div>
  );
};

export default ProjectMobile;
