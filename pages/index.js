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
      description="Full Stack Web developer who developing websites with passion"
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
