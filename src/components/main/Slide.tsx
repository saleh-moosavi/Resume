import LazyImage from "../Image";
import { useContext } from "react";
import themeContext from "../../context/theme";
import { portfolioType } from "../../types/dataType";
import { LuScreenShare, LuCodeXml } from "react-icons/lu";

export default function Slide({ item }: { item: portfolioType }) {
  const { isDark } = useContext(themeContext);
  return (
    <article className="relative overflow-hidden rounded-lg group cursor-grab">
      <LazyImage src={isDark ? item.imgDark : item.img} alt={item.title} />
      <section className="translate-y-full group-hover:translate-y-0 absolute inset-0 flex flex-col justify-start items-center gap-5 bg-my-black/50 backdrop-blur-md text-my-white p-5 transition-all duration-300">
        <h2 className="text-lg font-bold text-center select-none">
          {item.title}
        </h2>
        <p className="text-sm md:text-sm text-center select-none">
          {item.desc}
        </p>
        <ul className="flex gap-2 items-center *:inline-block mt-5">
          <li className="font-semibold">Techs : </li>
          {item.techs.map((tech: string, index: number) => (
            <li
              key={index}
              className="bg-my-lightgray text-my-black text-xs font-semibold px-2 py-1 rounded-lg select-none"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 mt-auto ">
          {item.demoLink && (
            <a
              href={item.demoLink}
              target="_blank"
              className="flex items-center gap-2 bg-my-darkpurple hover:bg-my-lightpurple p-2 rounded-lg"
            >
              <LuScreenShare className="size-5" />
              Live Demo
            </a>
          )}
          <a
            href={item.codeLink}
            target="_blank"
            className="flex items-center gap-2 bg-my-darkblue hover:bg-my-lightblue p-2 rounded-lg"
          >
            <LuCodeXml className="size-5" />
            Source Code
          </a>
        </div>
      </section>
    </article>
  );
}
