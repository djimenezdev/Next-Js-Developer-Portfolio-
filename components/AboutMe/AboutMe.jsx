import userData from "@constants/data";
import AboutIntro from "./AboutIntro";
import AboutSideBar from "./AboutSidebar/AboutSideBar";
import AboutTech from "./AboutTech/AboutTech";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <AboutIntro user={userData} />
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* update cv for  job opp section */}
          <AboutSideBar user={userData} />
          {/* Tech area */}
          {/* change about bio */}
          {/* change tech images and store images links in array and map through instead of manually add each */}
          <AboutTech user={userData} />
        </div>
      </div>
    </section>
  );
}
