import data from "../data/portfolio.json";
import LazyImage from "../components/Image";
import { portfolioType } from "../types/dataType";

export default function WorksIndex(props: { isDark: boolean }) {
  return (
    <div className="w-screen min-h-screen pb-10 pt-24">
      <section className="w-full grid justify-items-center gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-20">
        {data.map((item: portfolioType) => {
          return (
            <a href={item.link} key={item.id} target="_blank">
              <div className="move-in-down h-full flex flex-col justify-between">
                <section>
                  <div className="overflow-hidden rounded-lg dark:shadow-lg *:hover:scale-105 *:hover:-rotate-1 *:transition-all *:duration-300">
                    <LazyImage
                      src={props.isDark ? item.imgDark : item.img}
                      alt={item.title}
                    />
                  </div>
                  <article>
                    <h2 className="text-center pt-3 font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-justify text-sm pt-2">{item.desc}</p>
                  </article>
                </section>
                <ul className="text-xs text-justify mt-2 font-semibold flex flex-wrap justify-center gap-x-3">
                  <li>Techs : </li>
                  {item.techs.map((tech: string, index: number) => {
                    return <li key={index}>{tech}</li>;
                  })}
                </ul>
              </div>
            </a>
          );
        })}
      </section>
    </div>
  );
}
