import Image from "next/image";

const SmallCard = () => {
  return (
    <a
      href="https://expo.io/@djimenez0255/projects/uberClone"
      className="w-full block lg:col-span-1 col-span-3  object-cover"
    >
      <div className="relative overflow-hidden shadow-2xl rounded-md">
        <div className="image-container max-h-44">
          <Image
            src="/images/uber-clone.jpg"
            alt="portfolio"
            className="portfolio__image transform hover:scale-125 transition duration-2000 ease-out"
            layout="fill"
            quality={65}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAaCAIAAAB6opi9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEySURBVFhH1VdLFsIgDAzeyrN7MjfFSaC0lJLqwMLOw8cnH4ZMFjU8X2+JEmOURYCw2DpKGiGGtMW5nQRZMK0LLC0K25DP84gp2+oAK9JYlG7hoKZk1UW+HbPmifIwrz9AyHNCnxYe0Ud6quvCoHDr06rpn0JdztzG6fIi9miTnOowkpZTSpgcaxcWU7iRtBCfxuGVs0C2/HzU1/Etn8ViBOuiJONbfjLq55EiTq3RhnInKSLi0/DZf4k2x9+IWFPjaaGaWtCmqLmKY7hdy7twG+9ntNlIWptM44IdAI7hfi3vlmEreyOAvZaEBuJe7+vUze1LRwtbAueLSHPaY5jWFBYrVCFrgvnVohtrD5JWedYpC5qZlh4/r+VddTQW/+csRQU3StGjbOfFOF/Ea2aXEPkAw5No5T4ThIoAAAAASUVORK5CYII="
          />
        </div>
        <h1 className="absolute top-10 left-2 text-white font-bold text-base sm:text-xl bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-md px-2">
          Uber Clone
        </h1>
        <h1 className="absolute bottom-10 left-2 text-white bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] font-bold text-xl rounded-md px-2">
          03
        </h1>
      </div>
    </a>
  );
};

export default SmallCard;
