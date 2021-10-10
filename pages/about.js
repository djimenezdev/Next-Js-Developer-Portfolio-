import ContainerBlock from "@components/ContainerBlock";
import AboutMe from "@components/AboutMe/AboutMe";

export default function about() {
  return (
    <ContainerBlock
      title="About - Daniel Jimenez"
      description="Full Stack Web developer who developing websites with passion"
      type="website"
      image="/images/about-screenshot.png"
      date={new Date()}
    >
      <AboutMe />
    </ContainerBlock>
  );
}
