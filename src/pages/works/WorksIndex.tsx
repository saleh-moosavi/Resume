import data from "../../data/portfolio.json";

export default function WorksIndex(props: { isDark: boolean }) {
  return (
    <div className="w-screen min-h-screen">
      <section className="w-full grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 pt-24 px-20 justify-items-center">
        {data.map(
          (
            item: {
              img: string;
              title: string;
              desc: string;
              imgDark: string;
              link: string;
            },
            index: number
          ) => {
            return (
              <a href={item.link} target="_blank">
                <div key={index} className="move-in-down">
                  <div className="overflow-hidden rounded-lg dark:shadow-lg">
                    <img
                      className="hover:scale-105 hover:-rotate-1 transition-all duration-300"
                      src={props.isDark ? item.img : item.imgDark}
                      alt=""
                    />
                  </div>
                  <h2 className="text-center pt-3 font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-center text-sm">{item.desc}</p>
                </div>
              </a>
            );
          }
        )}
      </section>
    </div>
  );
}
