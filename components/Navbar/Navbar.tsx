import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import userData, { svgPaths } from '@constants/data';
import { Switch } from '@headlessui/react';
import NavLink from './NavLink';
import NavLinkArrow from './NavLinkArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLoading } from '@lib/Slices/routeSlice';

export default function Navbar() {
  // const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(true);
  const [screen, setScreen] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!window) return;
    setScreen(window.innerWidth);
    window.addEventListener('resize', () => setScreen(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setScreen(window.innerWidth));
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', () => dispatch(setLoading('loading')));
    router.events.on('routeChangeComplete', () =>
      dispatch(setLoading('not loading'))
    );
    router.events.on('routeChangeError', () => {
      dispatch(setLoading('not loading'));
      alert('There was an error. try again');
    });

    return () => {
      router.events.off('routeChangeStart', () =>
        dispatch(setLoading('loading'))
      );
      router.events.off('routeChangeComplete', () =>
        dispatch(setLoading('not loading'))
      );
      router.events.off('routeChangeError', () => {
        dispatch(setLoading('not loading'));
        alert('There was an error. try again');
      });
    };
  }, [router, dispatch]);

  useEffect(() => {
    if (theme === 'dark') {
      setEnabled(true);
      return;
    }
    setEnabled(false);
  }, [theme]);

  return (
    <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
      <div className='flex  md:flex-row justify-between items-center'>
        {/* Logo / Home / Text */}

        <div className='flex flex-col mr-2 sm:mr-0'>
          <Link href='/'>
            <a>
              <h1 className='font-semibold text-lg sm:text-xl text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] px-2 rounded-md'>
                {userData.name}
              </h1>
              <p className='text-base text-center font-light underline mt-1 sm:mt-0'>
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>

        <div className='space-x-8 hidden lg:block'>
          {/* active link arrow */}
          <NavLinkArrow name='about' path={svgPaths.arrowDown} />
          <NavLinkArrow name='projects' path={svgPaths.arrowDown} />
          <NavLinkArrow name='experience' path={svgPaths.arrowDown} />
          <NavLinkArrow name='contact' path={svgPaths.arrowDown} />
        </div>

        <div className='space-x-4 flex flex-col sm:flex-row sm:items-center'>
          {/* nav social icons */}
          <div className='space-x-4 flex flex-row items-center mb-1 sm:mb-0'>
            <a
              href={userData?.socialLinks?.instagram}
              target='_blank'
              className='flex items-center'
            >
              <div
                className={`bg-white  ${
                  screen <= 327
                    ? 'h-[18px]'
                    : screen <= 375
                    ? 'h-[21px]'
                    : 'xs:h-[29px]'
                } rounded-md`}
              >
                <Image
                  src='/images/instagram-icon.png'
                  width={screen < 425 ? 24 : 30}
                  height={screen < 425 ? 24 : 30}
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
                style={{ fontSize: screen < 425 ? '1.5em' : '2em' }}
                className='dark:text-[#fff]  cursor-pointer'
              />
            </a>
            <div className='xs:h-[26px] xs:w-[28px] h-[20px] bg-white flex justify-center items-center rounded-md cursor-pointer'>
              <a
                href={userData?.socialLinks?.linkedin}
                target='_blank'
                className='flex items-center'
              >
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  style={{ fontSize: screen < 425 ? '1.5em' : '2em' }}
                  className='text-[#0072B1]'
                />
              </a>
            </div>
          </div>
          {/* light/dark mode toggler  */}
          <div className='relative flex justify-end sm:inline-block z-0 mt-2'>
            <Switch
              checked={enabled}
              onChange={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
              className='bg-[#4D4E4F] relative inline-flex justify-between items-center flex-shrink-0 h-[24px] w-[60px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
            >
              {enabled === true && <span className='absolute left-1 '>🌜</span>}
              <span className='sr-only'>Use setting</span>
              <span
                aria-hidden='true'
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 z-10`}
              />
              {enabled === false && (
                <span className='absolute right-1'>🌞</span>
              )}
            </Switch>
          </div>
        </div>
      </div>

      {/* regular nav links */}
      <div className='space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-8 flex justify-center lg:hidden mt-4'>
        <NavLink page='about' />
        <NavLink page='projects' />
        <NavLink page='experience' />
        <NavLink page='contact' />
      </div>
    </div>
  );
}
