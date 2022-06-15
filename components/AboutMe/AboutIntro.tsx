const AboutIntro = ({ user }: { user: { about: { title: string[] } } }) => {
  return (
    <>
      <div className='max-w-6xl mx-auto bg-white dark:bg-gray-800'>
        <h1 className='text-5xl md:text-9xl mb-5 font-bold text-center md:text-left'>
          About Me.
        </h1>
      </div>
      <div className='bg-[#F1F1F1] -mt-10 dark:bg-gray-900'>
        <div className='text-container max-w-6xl mx-auto pt-20'>
          <p
            className='leading-loose text-xl md:text-2xl lg:text-4xl font-semibold  mx-4'
            style={{ lineHeight: '3rem' }}
          >
            {user.about.title[0]}
            <span className='bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] px-2 py-1 rounded-md text-white'>
              {user.about.title[1]}
            </span>
            {user.about.title[2]}
            <span className='inline-block pl-1 underline'>
              {user.about.title[3]}
            </span>
            {/*  Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={user.about.currentProjectUrl}
            >
              {user.about.currentProject} ✈️
            </a> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutIntro;
