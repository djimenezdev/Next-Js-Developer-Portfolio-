import ContainerBlock from '@components/ContainerBlock';
import ProjectPageComp from '@components/ProjectPage/ProjectPageComp';
import userData from '@constants/data';
import { useRouter } from 'next/router';

const Project = ({ project: projectInfo, otherProjects }) => {
  const {
    query: { project },
  } = useRouter();

  return (
    <ContainerBlock
      title={`${project} - Daniel Jimenez`}
      description="Hello my name is Daniel Jimenez! I'm a Full Stack Web dev who developes websites with passion! Learn more about me and my passion:)"
      type='website'
      image='/images/about-screenshot.png'
      date={new Date()}
    >
      <ProjectPageComp
        projectInfo={projectInfo}
        otherProjects={otherProjects}
      />
    </ContainerBlock>
  );
};

export default Project;

export async function getStaticPaths() {
  const projectParams = userData.projects;
  return {
    paths: projectParams.map(({ route }) => {
      return {
        params: {
          project: route,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = userData.projects.filter(
    ({ route }) => route === params.project
  );

  const otherProjects = userData.projects.filter(
    ({ route }) => route !== params.project
  );

  return {
    props: {
      project: project[0],
      otherProjects: otherProjects,
    },
  };
}
