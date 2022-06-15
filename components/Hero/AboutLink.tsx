import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MotionButton from '@components/MotionButton';

const AboutLink = ({
  infoDisplay,
  imageLoaded,
}: {
  infoDisplay: boolean;
  imageLoaded: boolean;
}) => {
  return (
    <Link href='/about'>
      <motion.aside
        className={`absolute z-10 lg:h-[75vh]  xl:h-screen w-full cursor-pointer flex justify-center items-center transition-colors duration-300 ${
          infoDisplay ? 'bg-black' : ''
        }`}
        transition={{ duration: 0.3 }}
      >
        {infoDisplay && imageLoaded && <MotionButton />}
      </motion.aside>
    </Link>
  );
};

export default AboutLink;
