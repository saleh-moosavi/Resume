import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const LanguagesAndTools = [
  {
    title: "HTML",
    bgColor: "#E44D27",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    bgColor: "#1572B6",
    icon: <FaCss3 />,
  },
  {
    title: "Sass",
    bgColor: "#CC6699",
    icon: <FaSass />,
  },
  {
    title: "Bootstrap",
    bgColor: "#6E2BF2",
    icon: <FaBootstrap />,
  },
  {
    title: "Tailwind",
    bgColor: "#1A202C",
    icon: <SiTailwindcss />,
  },
  {
    title: "JavaScript",
    bgColor: "#ffbb00",
    icon: <SiJavascript />,
  },
  {
    title: "TypeScript",
    bgColor: "#1976D2",
    icon: <SiTypescript />,
  },
  {
    title: "Git",
    bgColor: "#F05032",
    icon: <FaGitAlt />,
  },
  {
    title: "React",
    bgColor: "#282C34",
    icon: <FaReact />,
  },
  {
    title: "NextJs",
    bgColor: "#dddddd",
    icon: <SiNextdotjs className="*:fill-my-black" />,
  },
  {
    title: "NodeJs",
    bgColor: "#2a2a2a",
    icon: <SiNodedotjs />,
  },
  {
    title: "ExpressJs",
    bgColor: "#dddddd",
    icon: <SiExpress className="*:fill-my-black" />,
  },
];
