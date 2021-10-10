import { svgPaths } from "@constants/data";
import SidebarSocial from "./SidebarSocial";

const SidebarSocials = ({ user }) => {
  return (
    <>
      {user &&
        Object?.entries(user?.socialLinks).map((val, i) => (
          <SidebarSocial
            key={i}
            title={val[0]}
            link={val[1]}
            pathInfo={svgPaths}
          />
        ))}
    </>
  );
};

export default SidebarSocials;
