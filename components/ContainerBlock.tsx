import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer';
import { useSelector } from 'react-redux';
import { routeLoad } from '@lib/Slices/routeSlice';
import { AnimatePresence, motion } from 'framer-motion';

type IContainerBlock = {
  children: JSX.Element;
  title: string;
  description: string;
  type: string;
  image: string;
  date: Date;
};

export default function ContainerBlock({
  children,
  ...customMeta
}: IContainerBlock) {
  const router = useRouter();
  const routeLoadState = useSelector(routeLoad);
  const meta = {
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://www.djimenezdev.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://www.djimenezdev.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Daniel Jimenez' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@mannupaaji' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta
            property='article:published_time'
            content={meta.date.toString()}
          />
        )}
      </Head>
      {routeLoadState === 'loading' && (
        <section className='absolute w-screen h-screen bg-[#1F2937] z-40 flex justify-center items-center'>
          <div className='flex justify-center items-center'>
            <motion.div
              animate={{
                rotate: 360,
                background: ['#E81B63', '#38bdf8'],
              }}
              transition={{
                flip: Infinity,
                duration: 2,
                ease: 'easeInOut',
              }}
              style={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
              }}
            />
            <h2 className='text-4xl ml-2'>Loading</h2>
            <AnimatePresence>
              <motion.div
                layoutId='loadingCircle'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
                style={{
                  height: '10px',
                  width: '10px',
                  borderRadius: '50%',
                  background: '#E81B63',
                  alignSelf: 'flex-end',
                  marginBottom: '10px',
                  marginLeft: '5px',
                }}
              />
              <motion.div
                layoutId='loadingCircle'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
                style={{
                  height: '10px',
                  width: '10px',
                  borderRadius: '50%',
                  background: '#E81B63',
                  alignSelf: 'flex-end',
                  marginBottom: '10px',
                  marginLeft: '5px',
                }}
              />
              <motion.div
                layoutId='loadingCircle'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
                style={{
                  height: '10px',
                  width: '10px',
                  borderRadius: '50%',
                  background: '#E81B63',
                  alignSelf: 'flex-end',
                  marginBottom: '10px',
                  marginLeft: '5px',
                }}
              />
            </AnimatePresence>
          </div>
        </section>
      )}
      <main className='dark:bg-gray-800 w-full h-screen overflow-y-scroll'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
