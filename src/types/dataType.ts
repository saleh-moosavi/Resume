export interface portfolioType {
  id: number;
  title: string;
  desc: string;
  techs: string[];
  isFavor: boolean;
  img: string;
  imgDark: string;
  link: string;
}

export interface infoType {
  name: string;
  desc: string;
  skillDescBase: string;
  softSkills: string[];
}
