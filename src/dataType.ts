import { Dispatch, ReactNode, SetStateAction } from "react";

export interface portfolioType {
  id: number;
  title: string;
  desc: string;
  techs: string[];
  isFavor: boolean;
  img: string;
  imgDark?: string;
  demoLink?: string;
  codeLink: string;
}

export interface infoType {
  name: string;
  desc: string;
  skillDescBase: string;
  softSkills: string[];
}

export interface SkillBtnType {
  bgColor: string;
  icon: ReactNode;
  title: string;
}

export interface HeaderType {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

export interface NavBarSideType {
  isClose: boolean;
  handleSideBar: () => void;
}

export interface IArticleResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export interface IArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
