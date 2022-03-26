import Link from "next/link";
import LargeCard from "./LargeCard";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import user from "@constants/data";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto w-full">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-700 dark:text-white my-20 md:my-0  text-center">
            Favorite Projects
          </h1>
          <Link href="/projects">
            <a className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>View all</p>
            </a>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid grid-cols-3 gap-8 lg:-mt-8 pb-40 px-4">
          {/* Large card */}
          <LargeCard
            title={user?.projects[0].title}
            imageUrl={user?.projects[0].imgUrl}
            liveLink={user?.projects[0].link}
          />
          {/* Medium card */}
          <MediumCard
            title={user?.projects[1].title}
            imageUrl={user?.projects[1].imgUrl}
            liveLink={user?.projects[1].link}
          />
          {/* Small card */}
          <SmallCard
            title={user?.projects[4].title}
            imageUrl={user?.projects[4].imgUrl}
            liveLink={user?.projects[4].link}
          />
        </div>
      </div>
    </div>
  );
}
