export const randomizeProjects = (projects) => {
  const projectsCopy = [...projects];
  const randomProjects = [];
  while (randomProjects.length !== 3) {
    if (randomProjects.length === 3) {
      break;
    }
    const randomIndex = Math.floor(Math.random() * projectsCopy.length);
    const randomProject = projects[randomIndex];
    if (
      randomProjects.some(({ title }) => title === projects[randomIndex]) !==
      true
    ) {
      randomProjects.push(randomProject);
    }
  }

  return randomProjects;
};
