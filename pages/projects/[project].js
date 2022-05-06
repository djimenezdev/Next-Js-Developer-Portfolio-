import { useRouter } from "next/router";
const Project = () => {
  const {
    query: { project },
  } = useRouter();
  return <div>{project}</div>;
};

export default Project;
