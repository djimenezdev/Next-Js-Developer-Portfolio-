import userData from '@constants/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='bg-[#F1F1F1] dark:bg-gray-900'>
      <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
        <div className='h-0.5 w-full bg-white dark:bg-gray-700'></div>
        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8'>
          <div>
            <p>&copy; Daniel Jimenez. All Rights Reserved.</p>
          </div>
          <div>
            {/* Support me by keeping this in the footer, please. :) */}

            <div className='inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300'>
              <p>
                Template Developed by
                <a
                  className='hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50'
                  href='https://manuarora.in'
                >
                  Manu Arora
                </a>
              </p>
            </div>
          </div>
          <div className='space-x-4 flex flex-row items-center'>
            <a
              href={userData?.socialLinks?.instagram}
              target='_blank'
              className='flex items-center'
            >
              <div className='bg-white h-[29px] rounded-md'>
                <Image
                  src='/images/instagram-icon.png'
                  width={30}
                  height={30}
                  alt='instagram icon'
                />
              </div>
            </a>
            <a
              href={userData?.socialLinks?.github}
              target='_blank'
              className='flex items-center'
            >
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size='2x'
                className='dark:text-[#fff]  cursor-pointer'
              />
            </a>
            <div className='h-[26px] w-[28px] bg-white flex justify-center items-center rounded-md cursor-pointer'>
              <a
                href={userData?.socialLinks?.linkedin}
                target='_blank'
                className='flex items-center'
              >
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  size='2x'
                  className='text-[#0072B1]'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
