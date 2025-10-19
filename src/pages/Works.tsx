import { useContext } from "react";
import Badge from "../components/Badge";
import data from "../data/portfolio.json";
import themeContext from "../context/theme";
import LazyImage from "../components/Image";
import LinkButton from "../components/LinkButton";
import { portfolioType } from "../types/dataType";
import { LuCodeXml, LuScreenShare } from "react-icons/lu";

export default function WorksIndex() {
  const { isDark } = useContext(themeContext);
  return (
    <div className="w-screen min-h-screen pb-10 pt-24">
      <section className="w-full grid justify-items-center gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-20">
        {data.map((item: portfolioType) => {
          return (
            <div
              key={item.id}
              className="move-in-down h-full flex flex-col justify-between"
            >
              <section className="mb-3">
                <div className="relative overflow-hidden rounded-lg dark:shadow-lg group">
                  <section className="group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
                    <LazyImage
                      src={isDark ? item.imgDark : item.img}
                      alt={item.title}
                    />
                  </section>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-5 mt-auto bg-my-black/50 backdrop-blur-sm text-my-white p-5 transition-all duration-300">
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
                </div>
                <article>
                  <h2 className="text-center pt-3 font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-justify text-sm pt-2">{item.desc}</p>
                </article>
              </section>
              <ul className="text-xs text-justify mt-2 font-semibold flex flex-wrap justify-start gap-2">
                <li>Techs : </li>
                {item.techs.map((tech: string, index: number) => {
                  return (
                    <li key={index}>
                      <Badge>{tech}</Badge>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}
