import { shimmer } from '@components/Shimmer';
import userData, { toBase64 } from '@constants/data';
import Image from 'next/image';
import React from 'react';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import MobileAboutLink from './MobileAboutLink';

const updateProfilePic = (setWidth: Dispatch<SetStateAction<boolean>>) => {
  if (window.innerWidth <= 768) {
    setWidth(true);
    return;
  }
  setWidth(false);
};

const HeroMobile = () => {
  const [width, setWidth] = useState<boolean>(false);
  const [infoDisplay, setInfoDisplay] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const updateListener = useCallback(() => {
    updateProfilePic(setWidth);
  }, []);

  useEffect(() => {
    updateListener();
    window.addEventListener('resize', updateListener);
    return () => window.removeEventListener('resize', updateListener);
  }, []);
  return (
    <div className={`${width ? 'block' : 'hidden'} relative mb-6`}>
      <div className='w-screen flex flex-col justify-center items-center'>
        <h1 className={`text-4xl xss:text-5xl xs:text-6xl  mb-2`}>
          {userData.name}
        </h1>
        <h3 className='mb-2 text-2xl bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] px-2 py-1 rounded-md text-white'>
          {userData.designation}
        </h3>
        <p className='text-md xss:text-xl mt-3 mb-10 xss:px-1 xs:px-20 text-center'>
          "I'm a developer {userData.about.title[2]}"
        </p>
        <div
          className='relative cursor-pointer w-[95vw]  h-[45vh] xss:h-[55vh] xs:w-[60vh] xs:h-[60vh] sm:h-[85vh] sm:w-[75vw] rounded-full shadow bg-[#35B7FF]'
          onMouseOver={() => setInfoDisplay(true)}
          onMouseLeave={() => setInfoDisplay(false)}
        >
          <MobileAboutLink
            infoDisplay={infoDisplay}
            imageLoaded={imageLoaded}
          />
          <Image
            src={userData.avatarUrl}
            className='rounded-full'
            alt='avatar'
            layout='fill'
            quality={65}
            priority={true}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            onLoadingComplete={() => {
              setImageLoaded(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
