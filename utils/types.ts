export type FormValues = {
  name?: string;
  email?: string;
  message?: string;
};

export type IProject = {
  route: string;
  title: string;
  link: string;
  desc: string;
  repo: string;
  accomplishments: string[];
  technologies: string[];
  type: string;
  imgUrl: string[];
};

export type userAbout = {
  title: string[];
  description: string[];
};

export type userExperience = {
  title: string;
  company: string;
  logo: string | string[] | any;
  year: string;
  companyLink: string;
  desc: string;
};

export type IUserData = {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phone: string;
  address: string;
  projects: IProject[];
  about: userAbout;
  experience: userExperience[];
  resumeUrl: string;
  socialLinks: any;
  techStack: any;
};

export type IVariant = {
  opacity: number;
  scale: number;
};

export type IGithubRepoCard = {
  name: string;
  owner: { avatar_url: string; login: string };
  created_at: string;
  clone_url: string;
};

export type IFavCard = {
  title: string;
  imageUrl: string[];
  route: string;
  isOther?: boolean;
};
