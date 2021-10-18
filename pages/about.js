import ContainerBlock from "@components/ContainerBlock";
import AboutMe from "@components/AboutMe/AboutMe";

export default function about() {
  return (
    <ContainerBlock
      title="About - Daniel Jimenez"
      description="Hello my name is Daniel Jimenez! I'm a Full Stack Web dev who developes websites with passion! Learn more about me and my passion:)"
      type="website"
      image="/images/about-screenshot.png"
      date={new Date()}
    >
      <AboutMe />
    </ContainerBlock>
  );
}
