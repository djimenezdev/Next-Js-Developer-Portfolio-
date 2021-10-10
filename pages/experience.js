import ContainerBlock from "@components/ContainerBlock";
import Experience from "@components/Experience/Experience";

export default function experience() {
  return (
    <ContainerBlock
      title="Experience - Daniel Jimenez"
      description="Full Stack Web developer who developing websites with passion"
      type="website"
      image="/images/experience-screenshot.png"
      date={new Date()}
    >
      <Experience />
    </ContainerBlock>
  );
}
