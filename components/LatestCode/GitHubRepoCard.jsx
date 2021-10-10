import { format } from "date-fns";
import Image from "next/image";

export const GithubRepoCard = ({ latestRepo }) => {
  return (
    <section className="github-repo dark:bg-[#111827] bg-white shadow-shadow-white  rounded-md p-2 max-h-48">
      <h1 className="font-semibold md:text-lg lg:text-base xl:text-lg text-white  mb-3 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md p-[0.5] pl-2">
        {latestRepo.name.charAt(0).toUpperCase() + latestRepo.name.substring(1)}
      </h1>
      <div className="flex space-x-4">
        <Image
          src={latestRepo.owner.avatar_url}
          width={50}
          height={40}
          className="rounded-full"
          alt="github avatar"
          quality={65}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAaCAIAAAB6opi9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEySURBVFhH1VdLFsIgDAzeyrN7MjfFSaC0lJLqwMLOw8cnH4ZMFjU8X2+JEmOURYCw2DpKGiGGtMW5nQRZMK0LLC0K25DP84gp2+oAK9JYlG7hoKZk1UW+HbPmifIwrz9AyHNCnxYe0Ud6quvCoHDr06rpn0JdztzG6fIi9miTnOowkpZTSpgcaxcWU7iRtBCfxuGVs0C2/HzU1/Etn8ViBOuiJONbfjLq55EiTq3RhnInKSLi0/DZf4k2x9+IWFPjaaGaWtCmqLmKY7hdy7twG+9ntNlIWptM44IdAI7hfi3vlmEreyOAvZaEBuJe7+vUze1LRwtbAueLSHPaY5jWFBYrVCFrgvnVohtrD5JWedYpC5qZlh4/r+VddTQW/+csRQU3StGjbOfFOF/Ea2aXEPkAw5No5T4ThIoAAAAASUVORK5CYII="
        />
        <div>
          <p>
            By <strong>{latestRepo.owner.login}</strong>
          </p>
          <p>
            Created on{" "}
            <strong>
              {format(new Date(latestRepo.created_at), "MM-dd-yyyy")}
            </strong>
          </p>
        </div>
      </div>
      <a
        href={latestRepo.clone_url}
        className="mt-3 px-2 py-4 sm:w-[40%] md:w-[67%] lg:w-[75%] w-[80%] font-semibold group flex flex-row space-x-2 items-center text-white  rounded-md text-xl bg-gradient-to-r from-[#38bdf8] to-[#3b82f6]"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </section>
  );
};
