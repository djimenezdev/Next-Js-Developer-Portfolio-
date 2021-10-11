import { imgBlur } from "@constants/data";
import Image from "next/image";

const LargeCard = () => {
  return (
    <a
      href="https://airbnb-clone-with-nextjs.vercel.app/"
      className="w-full block col-span-3 shadow-2xl "
    >
      <div className="relative overflow-hidden rounded-md">
        <div className="image-container max-h-[517px]">
          <Image
            src="/images/airbnb-clone.jpg"
            alt="portfolio"
            className="portfolio__image transform hover:scale-125 transition duration-2000 ease-out"
            layout="fill"
            quality={65}
            placeholder="blur"
            blurDataURL={imgBlur}
          />
        </div>
        <h1 className="absolute top-10 left-10 text-white font-bold text-base sm:text-xl bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md px-2">
          Airbnb Clone built with NextJS
        </h1>
        <h1 className="absolute bottom-10 left-10 text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] font-bold text-xl rounded-md px-2">
          01
        </h1>
      </div>
    </a>
  );
};

export default LargeCard;
