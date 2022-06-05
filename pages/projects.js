import ContainerBlock from '@components/ContainerBlock';
import Projects from '@components/Projects/Projects';

export default function projects() {
  return (
    <ContainerBlock
      title='Projects - Daniel Jimenez'
      description="Hello my name is Daniel Jimenez! I'm a Full Stack Web dev who developes websites with passion. Here are some of my projects!"
      type='website'
      image='/images/projects-screenshot.png'
      date={new Date()}
    >
      <Projects />
    </ContainerBlock>
  );
}
