import SidebarSocial from './SidebarSocial';
import { IUserData } from '@utils/types';

const SidebarSocials = ({ user }: { user: IUserData }) => {
  return (
    <>
      {user &&
        Object?.entries(user?.socialLinks).map((val, i) => (
          <SidebarSocial key={i} title={val[0]} link={val[1] as string} />
        ))}
    </>
  );
};

export default SidebarSocials;
