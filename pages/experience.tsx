import ContainerBlock from "@components/ContainerBlock";
import Experience from "@components/Experience/Experience";

export default function experience() {
  return (
    <ContainerBlock
      title="Experience - Daniel Jimenez"
      description="Hello my name is Daniel Jimenez! I'm a Full Stack Web dev who developes websites with passion! Check out all of my amazing experiences!"
      type="website"
      image="/images/experience-screenshot.png"
      date={new Date()}
    >
      <Experience />
    </ContainerBlock>
  );
}
