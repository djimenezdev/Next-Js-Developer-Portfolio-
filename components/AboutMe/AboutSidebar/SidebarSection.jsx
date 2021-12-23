import Link from "next/link";

const SidebarSection = ({ title, desc, user }) => {
  return (
    <div className={`${title !== "Contact" && "mt-8"}`}>
      <h1 className="bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md py-1 px-2 text-xl font-semibold text-white dark:text-gray-200">
        {title}
      </h1>

      <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
        {title === "Contact" ? (
          <>
            <span>{desc[0]}</span>
            <Link href="/contact">
              <a className="group border-b-2 border-gray-800 hover:border-white dark:border-gray-300 font-bold dark:text-gray-300 whitespace-nowrap hover:bg-white hover:rounded-md px-1 transition-all  duration-200">
                <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] ">
                  E-mail
                </span>
              </a>
            </Link>
            <span>{desc[1]}</span>
          </>
        ) : (
          <>
            <span>{desc[0]}</span>
            <a
              className="group border-b-2 border-gray-800 hover:border-white dark:border-gray-300 font-bold dark:text-gray-300 whitespace-nowrap hover:bg-white hover:rounded-md px-1 transition-all  duration-200"
              target="_blank"
              href={user?.resumeUrl}
            >
              <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] ">
                Resume
              </span>
            </a>

            <span>{desc[1]}</span>
          </>
        )}
      </p>
    </div>
  );
};

export default SidebarSection;
