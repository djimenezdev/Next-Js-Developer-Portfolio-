import { IUserData } from '@utils/types';
import SidebarSection from './SidebarSection';
import SidebarSocials from './SidebarSocials';

const AboutSideBar = ({ user }: { user: IUserData }) => {
  return (
    <div className='inline-flex flex-col'>
      <SidebarSection
        user={user}
        title='Contact'
        desc={[
          'For any sort help / enquiry, shoot a ',
          " and I'll get back. I swear.",
        ]}
      />
      <SidebarSection
        title='Job Opportunities'
        desc={[
          "I'm looking for a job currently, If you see me as a good fit, check my ",
          ". I'd love to work for you.",
        ]}
        user={user}
      />
      {/* Social Links */}
      <h1 className='bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md p-1 text-xl font-semibold text-white mt-8 '>
        Social Links
      </h1>
      <div className='mt-4 ml-4'>
        <SidebarSocials user={user} />
      </div>
    </div>
  );
};

export default AboutSideBar;
