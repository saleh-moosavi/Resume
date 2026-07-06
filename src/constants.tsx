import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiAxios,
  SiReactquery,
  SiReacthookform,
  SiZod,
  SiExpress,
  SiZedindustries,
} from "react-icons/si";
import { SiGmail, SiTelegram, SiGithub, SiLinkedin } from "react-icons/si";

/* CV Details */
export const myInfo = {
  name: "Seyed Saleh Moosavi",
  job_title: "Front End Developer ( React )",
  profile:
    "Front-End Developer skilled in React and JavaScript, with 2 years of hands-on experience in building responsive and high-performance web applications. Eager to contribute to an innovative team and take on new technical challenges.",
  desc: "I’m a front-end web developer with a passion for building dynamic, responsive, and user-friendly websites using modern technologies like React. I enjoy tackling complex problems and continuously improving my skills by staying up-to-date with the latest web development trends.",
};
export const mySkills = [
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
    title: "JavaScript (ES6+)",
    bgColor: "#ffbb00",
    icon: <SiJavascript />,
  },
  {
    title: "TypeScript",
    bgColor: "#1976D2",
    icon: <SiTypescript />,
  },
  {
    title: "React.Js",
    bgColor: "#282C34",
    icon: <FaReact />,
  },
  {
    title: "Next.Js",
    bgColor: "#dddddd",
    icon: <SiNextdotjs className="*:fill-my-black" />,
  },
  {
    title: "Zustand",
    bgColor: "#443E38",
    icon: <SiZedindustries />,
  },
  {
    title: "Redux",
    bgColor: "#764ABC",
    icon: <SiRedux />,
  },
  {
    title: "React Router",
    bgColor: "#CA4245",
    icon: <SiReactrouter />,
  },
  {
    title: "Axios",
    bgColor: "#5A29E4",
    icon: <SiAxios />,
  },
  {
    title: "React Query",
    bgColor: "#FF4154",
    icon: <SiReactquery />,
  },
  {
    title: "React Hook Form",
    bgColor: "#EC5990",
    icon: <SiReacthookform />,
  },
  {
    title: "Zod",
    bgColor: "#3E67B1",
    icon: <SiZod />,
  },
  {
    title: "Git",
    bgColor: "#F05032",
    icon: <FaGitAlt />,
  },
  {
    title: "GitHub",
    bgColor: "#2b2b2b",
    icon: <FaGithub />,
  },
  {
    title: "Rest APIs",
    bgColor: "#25A162",
    icon: <SiAxios />,
  },
  {
    title: "Node.Js",
    bgColor: "#539E43",
    icon: <FaNodeJs />,
  },
  {
    title: "Express.Js",
    bgColor: "#dddddd",
    icon: <SiExpress className="*:fill-my-black" />,
  },
  {
    title: "Figma",
    bgColor: "#F24E1E",
    icon: <FaFigma />,
  },
];
export const mySoftSkills = [
  "Attention to Detail",
  "Adaptability & Problem-Solving",
  "Effective Time Management & Prioritization",
  "Continuous Learner with Technical Curiosity",
  "Collaboration & Team Coordination",
];
export const myJobs = [
  {
    title: "Front End Developer",
    company: "Rastaar",
    date: "11/2025 - 01/2026",
    time: "Project Oriented",
    type: "Remote",
    description: [
      "Developed modular admin panel following atomic design methodology, building reusable components from atoms to full page templates",
      "Managed server state with Axios and React Query for efficient fetching, caching, and background updates",
      "Built type-safe forms using React Hook Form with Zod validation to improve reliability",
      "Created and maintained internal NPM package of shared components with token-based authentication",
      "Enforced TypeScript across the codebase for strict typing, reduced runtime errors, and better maintainability",
    ],
  },

  {
    title: "Front End Developer",
    company: "Atlas Land",
    date: "01/2025 - 09/2025",
    time: "Full Time",
    type: "Hybrid",
    description: [
      "Developed fast and optimized AI agent with Next.js 15, TypeScript, and Tailwind CSS using modular, scalable architecture",
      "Managed state with Zustand and optimized performance/SEO via SSR, SSG, and lazy loading to improve Core Web Vitals",
      "Integrated RESTful APIs with robust error handling",
      "Translated Figma designs into reusable and responsive components",
    ],
  },
  {
    title: "Front End Developer",
    company: "Almas Niro",
    date: "11/2023 - 12/2024",
    time: "Full Time",
    type: "On Site",
    description: [
      "Developed an internal management system (employee attendance, inventory in/out, shift task logging, company services tracking, and scheduling) using HTML, CSS, Bootstrap, JavaScript, and jQuery",
      "Collaborated with back-end developers on REST API integration",
      "Handled ongoing maintenance, bug fixes, and system improvements",
    ],
  },
];
export const myEducations = [
  {
    field: "Business Management",
    level: "Master",
    duration: "09/2023 - Until Now",
    university: "Payam Noor University",
  },
  {
    field: "Computer Engineering",
    level: "Bachelor",
    duration: "09/2018 - 08/2023",
    university: "Ayatollah Borojerdi University",
  },
];
export const myContactInfo = [
  { title: "Address", description: "Tehran" },
  { title: "Phone", description: "09938259989" },
  { title: "Email", description: "salehmoosavi77@gmail.com" },
  { title: "Military Status", description: "Educational Exemption" },
];
export const myProjects = [
  {
    name: "Pesonal Website",
    code_link: "https://github.com/saleh-moosavi/Resume",
    demo_link: "https://saleh-moosavi.vercel.app/",
    description:
      "Developed a responsive personal portfolio using React, TypeScript, and Vite, featuring a dark/light mode toggle via the Context API for global state. Implemented react-router-dom for navigation, Tailwind for styling, and Swiper for dynamic sliders. Optimized with React Suspense and lazy loading.",
  },
  {
    name: "FAnime",
    code_link: "https://github.com/saleh-moosavi/Filimora",
    demo_link: "https://filimora.vercel.app/",
    description:
      "Built an interactive anime discovery platform using React, TypeScript, and Redux Toolkit, featuring real-time API integration to browse, search, and explore detailed information about anime series. Implemented React Router for seamless navigation, Swiper for dynamic sliders, and a personalized favorites list for saving shows. Styled with Tailwind CSS and optimized with lazy loading for enhanced performance.",
  },
  {
    name: "Next-Play",
    code_link: "https://github.com/saleh-moosavi/Next-Play",
    demo_link: "https://next-play-black.vercel.app/",
    description:
      "Developed a modern game store and content platform using Next.js 16 and React 19, combining web scraping with API integration to deliver real-time game data, articles, and trailers. Utilized Cheerio for scraping, Zustand for state management, and React Query for efficient data caching. Styled with Tailwind CSS 4 and enhanced with Keen Slider for interactive carousels, featuring a sleek interface for browsing and purchasing games.",
  },
  {
    name: "Musiland",
    code_link: "https://github.com/saleh-moosavi/Musiland",
    demo_link: "",
    description:
      "Built a full-stack music streaming and content management platform with Next.js, TypeScript, and Tailwind on the frontend, using Zustand, Axios, and Zod for state and form handling. The Node.js, Express, and MongoDB backend enables secure authentication and an admin dashboard within a modular RESTful architecture.",
  },
  {
    name: "Forex Journal",
    code_link: "https://github.com/saleh-moosavi/Forex-Journal",
    demo_link: "https://forex-journal.vercel.app/",
    description:
      "Developed a forex trading journal web app using React, TypeScript, and Tailwind CSS, designed for traders to log, review, and analyze their trades. Implemented Recharts for insightful data visualization, react-router-dom for seamless navigation, and react-icons for a clean, intuitive interface that enhances user experience and performance tracking.",
  },
];
export const myLinks = [
  {
    title: "Github",
    url: "https://github.com/saleh-moosavi",
    icon: <SiGithub />,
  },
  {
    title: "Telegram",
    url: "https://t.me/Smous",
    icon: <SiTelegram />,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/saleh-moosavi-1b6878197/",
    icon: <SiLinkedin />,
  },
  {
    title: "Email",
    url: "mailto:https://salehmoosavi77@gmail.com",
    icon: <SiGmail />,
  },
];
export const myLanguages = [{ name: "English", level: "Fluent" }];

/* Portfolio Details */
export const portfolio = [
  {
    title: "Musiland",
    desc: "A full-featured music streaming and content management platform that allows users to discover, play, and manage their favorite tracks. Includes a comprehensive admin dashboard for content moderation, user management, and platform analytics.",
    techs: [
      "React",
      "Tailwind",
      "Axios",
      "Zustand",
      "Lucide_React",
      "Swipper",
      "React_Hook_Form",
      "Zod",
      "TypeScript",
      "Bcrypt",
      "Node.Js",
      "Express",
      "MongoDB",
    ],
    isFavor: true,
    img: "./assets/portfolio/musiland-dark.png",
    imgDark: "./assets/portfolio/musiland-light.png",
    codeLink: "https://github.com/saleh-moosavi/Musiland",
  },
  {
    title: "FAnime",
    desc: "An interactive anime discovery platform that lets you browse, search, and explore detailed information about your favorite anime series in real-time. You can save shows to a personalized favorites list and enjoy seamless navigation throughout the app.",
    techs: [
      "React",
      "Swipper",
      "Tailwind",
      "TypeScript",
      "React_Icons",
      "React_Router",
      "Redux_Toolkit",
    ],
    isFavor: true,
    img: "./assets/portfolio/filimora.png",
    demoLink: "https://filimora.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Filimora",
  },
  {
    title: "Next-Play",
    desc: "A modern game store and content platform that combines web scraping with API integration to deliver real-time game data, articles, and trailers.",
    techs: [
      "React",
      "Next.js",
      "Zustand",
      "Tailwind",
      "TypeScript",
      "Cheerio",
      "Keen_Slider",
    ],
    isFavor: true,
    img: "./assets/portfolio/next-play-dark.png",
    imgDark: "./assets/portfolio/next-play-light.png",
    demoLink: "https://next-play-black.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Next-Play",
  },
  {
    title: "Hobby Verse",
    desc: "A collection of classic mini-games and tools including Tic Tac Toe, Word Guessing, Memory Game, Calculator, Number Guessing, Minesweeper, Unit Converter, Rock Paper Scissors, and Password Generator. Built with React and Sass for a polished, interactive experience.",
    techs: ["TypeScript", "React", "Sass", "Tailwind", "React_Icons"],
    isFavor: false,
    img: "./assets/portfolio/tic-tac-toe.png",
    demoLink: "https://tic-tac-toe-plays.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Tic-Tac-Toe",
  },
  {
    title: "Foodie",
    desc: "a visually appealing and user-friendly online food website designed to inspire and engage food enthusiasts. It features a clean and modern layout with sections for trending recipes, categorized meal options and a collection of delicious dishes.",
    techs: ["TypeScript", "React", "Tailwind", "React_Icons"],
    isFavor: true,
    img: "./assets/portfolio/foodie.png",
    demoLink: "https://online-foodie.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Foodie",
  },
  {
    title: "Incore",
    desc: "The Incore landing page is designed using the glassmorphism style, which features a frosted glass-like effect with semi-transparent backgrounds, soft blur, and vibrant colors, giving it a modern and sleek appearance",
    techs: ["TypeScript", "React", "Tailwind", "React_Icons"],
    isFavor: false,
    img: "./assets/portfolio/incore.png",
    demoLink: "https://incore.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Incore",
  },
  {
    title: "Forex Journal",
    desc: "Forex Journal is A practical and intuitive tool built for forex traders to log and review their trades effectively. The app helping users improve their trading strategies and track performance through insightful data visualization and clean design.",
    techs: ["TypeScript", "React", "Tailwind", "React_Icons", "React_Router"],
    isFavor: true,
    img: "./assets/portfolio/forex-journal.png",
    demoLink: "https://forex-journal.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Forex-Journal",
  },
  {
    title: "Zenith",
    desc: "Zenith is A clean and minimal landing page showcasing modern business solutions. Designed with a subtle animations to highlight services and build trust through simplicity and clarity.",
    techs: ["React", "Tailwind", "TypeScript", "React_Icons"],
    isFavor: false,
    img: "./assets/portfolio/zenith.png",
    demoLink: "https://co-zenith.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Zenith",
  },
  {
    title: "Coffee Crave",
    desc: "A stylish and classic home page for a coffee brand, combining warm tones and elegant typography. Focused on creating a cozy, inviting atmosphere that highlights products and brand story.",
    techs: ["TypeScript", "React", "Tailwind", "React_Icons"],
    isFavor: false,
    img: "./assets/portfolio/coffee-crave.png",
    demoLink: "https://coffee-crave.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Coffee-Crave",
  },
  {
    title: "Glow Up",
    desc: "An elegant landing page for a beauty brand, featuring soft colors, smooth animations, and a clean layout. Designed to showcase products beautifully while ensuring a seamless and responsive user experience.",
    techs: ["React", "Swiper", "Tailwind", "TypeScript", "React_Icons"],
    isFavor: false,
    img: "./assets/portfolio/glow-up.png",
    demoLink: "https://glow-up-xi.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Glow-Up",
  },
  {
    title: "WebJoy",
    desc: "WebJoy is a remote gamepad control system. It allows a client to connect their physical gamepad to a host computer over a network (or localhost) and control it as a virtual Xbox 360 controller.",
    techs: ["HTML", "CSS", "JavaScript", "Python"],
    isFavor: false,
    img: "./assets/portfolio/webjoy.png",
    codeLink: "https://github.com/saleh-moosavi/WebJoy",
  },
  {
    title: "Weather Wise",
    desc: "A simple and clean weather dashboard that fetches real-time weather data and forecasts for any city using a weather API. Just enter a location name to get current conditions, temperature, and more.",
    techs: ["HTML", "CSS", "JavaScript"],
    isFavor: false,
    img: "./assets/portfolio/weather-wise.png",
    demoLink: "https://weather-wise-silk.vercel.app/",
    codeLink: "https://github.com/saleh-moosavi/Weather-Wise",
  },
];

export const navLivks = [
  {
    title: "WORKS",
    href: "works",
  },
  {
    title: "BLOG",
    href: "blog",
  },
  {
    title: "ABOUT",
    href: "about",
  },
  {
    title: "CONTACT",
    href: "contact",
  },
];
