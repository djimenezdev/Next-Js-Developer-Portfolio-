import ContainerBlock from "@components/ContainerBlock";
import Projects from "@components/Projects/Projects";

export default function projects() {
  return (
    <ContainerBlock
      title="Projects - Daniel Jimenez"
      description="Full Stack Web developer who developing websites with passion"
      type="website"
      image="/images/projects-screenshot.png"
      date={new Date()}
    >
      <Projects />
    </ContainerBlock>
  );
}
