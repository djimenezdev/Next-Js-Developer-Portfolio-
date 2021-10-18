import ContainerBlock from "@components/ContainerBlock";
import Contact from "@components/Contact";

export default function contact() {
  return (
    <ContainerBlock
      title="Contact Me - Daniel Jimenez"
      description="Hello my name is Daniel Jimenez! I'm a Full Stack Web dev who developes websites with passion! Contact me for further details on collaborating together"
      type="website"
      image="/images/contact-screenshot.png"
      date={new Date()}
    >
      <Contact />
    </ContainerBlock>
  );
}
