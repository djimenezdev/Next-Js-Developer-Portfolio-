import { imgBlur } from "@constants/data";
import Image from "next/image";

export const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 w-full object-cover">
          <Image
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover"
            layout="fill"
            placeholder="blur"
            blurDataURL={imgBlur}
          />
        </div>
        <h1 className="absolute top-10 left-10 text-white font-bold text-xl bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] font-bold text-xl rounded-md px-2">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
