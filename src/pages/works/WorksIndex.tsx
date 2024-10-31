import data from "../../data/portfolio.json";

export default function WorksIndex() {
  return (
    <div className="w-screen">
      <section className="w-full grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 pt-24 px-20 justify-items-center">
        {data.map((item: { img: string; title: string }, index: number) => {
          return (
            <div key={index} className="move-in-down">
              <div className="overflow-hidden rounded-lg dark:shadow-lg">
                <img
                  className="hover:scale-105 hover:-rotate-1 transition-all duration-300"
                  src={item.img}
                  alt=""
                />
              </div>
              <h2 className="text-center py-3">{item.title}</h2>
            </div>
          );
        })}
      </section>
    </div>
  );
}
