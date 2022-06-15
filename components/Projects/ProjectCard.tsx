// import { imgBlur } from '@constants/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toBase64 } from '@constants/data';
import { useRouter } from 'next/router';
import { shimmer } from '@components/Shimmer';
import MotionButton from '@components/MotionButton';
export const ProjectCard = ({
  title,
  imgUrl,
  number,
  route,
}: {
  number: string;
  title: string;
  imgUrl: string;
  route: string;
}) => {
  const [infoDisplay, setInfoDisplay] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  return (
    <div
      className='w-full block shadow-2xl'
      onMouseOver={() => setInfoDisplay(true)}
      onMouseLeave={() => setInfoDisplay(false)}
    >
      <div className='relative overflow-hidden'>
        <motion.div
          whileHover={{ backgroundColor: '#000' }}
          transition={{ duration: 0.3 }}
          className='w-full h-[140px] xss:h-[170px] xs:h-[200px] sm:h-44 lg:h-60 xl:h-72 object-cover'
        >
          <Image
            src={imgUrl}
            alt='portfolio'
            className='transform hover:scale-125 transition duration-2000 ease-out object-contain rounded-md'
            layout='fill'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            onLoadingComplete={() => {
              setImageLoaded(true);
            }}
          />
        </motion.div>
        <h1 className='absolute top-10 left-10 text-white font-bold text-sm lg:text-xl bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md px-2'>
          {title}
        </h1>
        <h1 className='absolute bottom-10 left-10 text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] font-bold text-xl rounded-md px-2'>
          {number.length === 1 ? '0' + number : number}
        </h1>
        {infoDisplay && imageLoaded && (
          <div
            className={`absolute flex justify-center items-center w-full h-full top-0  transition-colors duration-300 hover:bg-black cursor-pointer`}
            onClick={() => router.push(`/projects/${route}`)}
          >
            {' '}
            <MotionButton />
          </div>
        )}
      </div>
    </div>
  );
};
