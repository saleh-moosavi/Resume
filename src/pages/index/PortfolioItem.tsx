import data from "../../data/portfolio.json";

export default function PortfolioItem() {
  return (
    <section className="pt-10 w-full flex flex-nowrap justify-center gap-x-5 *:shrink-0 *:w-full">
      {data.map((item: any) => {
        if (item.isFavor) {
          return (
            <div className="relative max-w-3xl">
              <a href={item.link} target="_blank">
                <img
                  className="object-cover w-full h-72 sm:h-96 md:h-[27rem] lg:h-[30rem] rounded-lg"
                  src={item.img}
                  alt=""
                />
                <h3 className="text-center pt-4 text-sm font-semibold">
                  {item.title}
                </h3>
              </a>
            </div>
          );
        }
      })}
    </section>
  );
}
