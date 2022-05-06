import { imgBlur } from "@constants/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const LargeCard = ({ title, imageUrl, route /* , liveLink  */ }) => {
  const [infoDisplay, setInfoDisplay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/projects/${route}`);
  }, []);
  // added comment for preview to match to subdomain
  return (
    <div
      className="w-full  col-span-3 shadow-2xl cursor-pointer"
      onMouseOver={() => setInfoDisplay(true)}
      onMouseLeave={() => setInfoDisplay(false)}
      onClick={() => router.push(`/projects/${route}`)}
    >
      <div className="h-full relative overflow-hidden rounded-md">
        <div className="image-container max-h-[517px]">
          <Image
            src={imageUrl}
            alt={title}
            className="portfolio__image transform transition duration-2000 ease-out"
            layout="fill"
            quality={65}
            placeholder="blur"
            blurDataURL={imgBlur}
          />
        </div>
        <h1 className="absolute top-10 left-10 text-white font-bold text-base sm:text-xl bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] font-bold text-xl rounded-md px-2">
          01
        </h1>
        {infoDisplay && (
          <motion.div
            className={`absolute flex justify-center items-center w-full h-full top-0`}
            whileHover={{ backgroundColor: infoDisplay && "#000" }}
            transition={{ duration: infoDisplay && 0.3 }}
          >
            {" "}
            <motion.button
              className="flex space-x-5 px-8 py-4 rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] shadow-lg text-xl font-semibold  items-center text-white"
              type="button"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="bi bi-arrow-up-right-square"
                stroke="6"
                strokeWidth="6"
                viewBox="0 0 16 16"
              >
                <motion.path
                  fillRule="evenodd"
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1, duration: 0.2 }}
                  variants={{
                    hidden: {
                      pathLength: 0,
                      fill: "rgba(255, 255, 255, 0)",
                    },
                    visible: {
                      pathLength: 1,
                      fill: "rgba(255, 255, 255, 1)",
                    },
                  }}
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>Learn more</p>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LargeCard;
