import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const colors = {
  twitter: "text-[#1C99E6]",
  github: "text-[#000]",
  facebook: "text-[#4267B2]",
  linkedin: "text-[#0072B1]",
};

const SidebarSocial = ({ title, link, pathInfo }) => {
  return (
    <div className="flex flex-row justify-start items-center ">
      <a
        href={link}
        target="_blank"
        className="flex flex-row items-center space-x-4 group"
      >
        <div className="my-4">&rarr;</div>
        <div className="text-lg text-gray-500 font-mono dark:text-gray-300 flex items-center space-x-2">
          {title === "instagram" ? (
            <div className="bg-white h-[29px] rounded-md">
              <Image
                src="/images/instagram-icon.png"
                width={30}
                height={30}
                alt="instagram icon"
              />
            </div>
          ) : title === "twitter" ? (
            <FontAwesomeIcon
              icon={["fab", title]}
              size="2x"
              className="text-[#1C99E6]"
            />
          ) : (
            <div
              className={`w-[30px] bg-white mr-2 flex justify-center items-center ${
                title === "linkedin"
                  ? "rounded-md h-[30px]"
                  : "rounded-full h-[34.4px]"
              }`}
            >
              <FontAwesomeIcon
                icon={["fab", title]}
                size="2x"
                className={colors[title]}
              />
            </div>
          )}
          <div className="relative overflow-hidden">
            <span className=" absolute h-0.5 w-full bg-gray-400 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition duration-300"></span>
            {title === "instagram" ? (
              <p className="bg-clip-text dark:bg-gray-900 bg-[#F1F1F1] text-transparent bg-instagram-gradient">
                {title?.charAt(0)?.toUpperCase() + title?.substring(1)}
              </p>
            ) : (
              <p
                className={`${
                  colors && title !== "github"
                    ? colors[title]
                    : "dark:text-white text-black"
                }`}
              >
                {title?.charAt(0)?.toUpperCase() + title?.substring(1)}
              </p>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default SidebarSocial;
