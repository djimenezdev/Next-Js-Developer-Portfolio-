import ContainerBlock from "@components/ContainerBlock";
import FavouriteProjects from "@components/FavProjects/FavouriteProjects";
import LatestCode from "@components/LatestCode/LatestCode";
import Hero from "@components/Hero/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Daniel Jimenez - Developer, Writer, Creator"
      description="Hello my name is Daniel Jimenez! I'm a Full Stack Web dev who developes websites with passion and excited to share it with you!"
      type="website"
      image="/images/portfolio-screenshot.png"
      date={new Date()}
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
