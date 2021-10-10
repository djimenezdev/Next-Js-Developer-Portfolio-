import { RoughNotationGroup } from "react-rough-notation";
import HighlightText from "./HighlightText";
import HeroImage from "./HeroImage";

const highlightSections = [
  { color: "#F59E0B", text: "Developer." },
  { color: "#84CC16", text: "Designer." },
  { color: "#10B981", text: "Programmer." },
  { color: "#3B82F6", text: "Teacher." },
];

export default function Hero() {
  return (
    <div className="flex flex-row md:justify-center lg:justify-between xl:justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 text-center md:text-left lg:py-20 lg:pl-4 lg:pr-20 lgTwo:py-20  xl:pl-20 xl:py-20 xl:pr-24">
        <RoughNotationGroup show={true}>
          {highlightSections.map(({ color, text }, i) => (
            <HighlightText color={color} text={text} key={color + "-" + i} />
          ))}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <HeroImage />
    </div>
  );
}
