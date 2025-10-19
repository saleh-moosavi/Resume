import Badge from "../Badge";
import LazyImage from "../Image";
import { useContext } from "react";
import LinkButton from "../LinkButton";
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
        <ul className="flex flex-wrap gap-2 items-center *:inline-block mt-5">
          <li className="font-semibold">Techs : </li>
          {item.techs.map((tech: string, index: number) => (
            <li key={index}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 mt-auto ">
          {item.demoLink && (
            <LinkButton
              link={item.demoLink}
              classes="bg-my-darkpurple hover:bg-my-lightpurple"
              icon={<LuScreenShare />}
            >
              Live Demo
            </LinkButton>
          )}
          <LinkButton
            link={item.codeLink}
            classes="bg-my-darkblue hover:bg-my-lightblue"
            icon={<LuCodeXml />}
          >
            Source Code
          </LinkButton>
        </div>
      </section>
    </article>
  );
}
