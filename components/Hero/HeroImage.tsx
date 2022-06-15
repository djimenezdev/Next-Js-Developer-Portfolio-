import Image from 'next/image';
import userData, { toBase64 } from '@constants/data';
import { shimmer } from '@components/Shimmer';
import { useState } from 'react';
import AboutLink from './AboutLink';

const HeroImage = () => {
  const [infoDisplay, setInfoDisplay] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className={`hidden lg:block relative w-full md:w-1/2 md:-mr-36 lg:-mr-28 xl:-mr-40`}
    >
      <div
        className='relative w-3/4 cursor-pointer'
        onMouseOver={() => setInfoDisplay(true)}
        onMouseLeave={() => setInfoDisplay(false)}
      >
        <AboutLink infoDisplay={infoDisplay} imageLoaded={imageLoaded} />
        <div className='relative lg:h-[75vh]  xl:h-screen w-full rounded-md shadow bg-[#35B7FF]'>
          <Image
            src={userData.avatarUrl}
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

        <div className='flex flex-row justify-between mt-4'>
          <div className='flex flex-row space-x-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-90deg-up'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
              />
            </svg>
            <p className='font-mono'>
              Hover over me &#x26; click to learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
