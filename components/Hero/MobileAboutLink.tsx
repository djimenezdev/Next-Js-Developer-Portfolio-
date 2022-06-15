import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import MotionButton from '@components/MotionButton';

const MobileAboutLink = ({
  infoDisplay,
  imageLoaded,
}: {
  infoDisplay: boolean;
  imageLoaded: boolean;
}) => {
  return (
    <Link href='/about'>
      <motion.aside
        className={`absolute z-10 w-[95vw]  h-[45vh] xss:h-[55vh] xs:w-[60vh] xs:h-[60vh] sm:h-[85vh] sm:w-[75vw] rounded-full cursor-pointer flex justify-center items-center transition-colors duration-300 ${
          infoDisplay ? 'bg-black' : ''
        }`}
        transition={{ duration: 0.3 }}
      >
        {infoDisplay && imageLoaded && <MotionButton />}
      </motion.aside>
    </Link>
  );
};

export default MobileAboutLink;
