import ContainerBlock from "@components/ContainerBlock";
import Contact from "@components/Contact";

export default function contact() {
  return (
    <ContainerBlock
      title="Contact Me - Daniel Jimenez"
      description="Full Stack Web developer who developing websites with passion"
      type="website"
      image="/images/contact-screenshot.png"
      date={new Date()}
    >
      <Contact />
    </ContainerBlock>
  );
}
