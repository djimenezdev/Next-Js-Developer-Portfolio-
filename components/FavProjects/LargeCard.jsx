import { imgBlur } from "@constants/data";
import Image from "next/image";

const LargeCard = ({ title, imageUrl, liveLink }) => {
  return (
    <a href={liveLink} className="w-full block col-span-3 shadow-2xl ">
      <div className="relative overflow-hidden rounded-md">
        <div className="image-container max-h-[517px]">
          <Image
            src={imageUrl}
            alt={title}
            className="portfolio__image transform hover:scale-125 transition duration-2000 ease-out"
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
      </div>
    </a>
  );
};

export default LargeCard;
