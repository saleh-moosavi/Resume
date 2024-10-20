import data from "../../data/portfolio.json";

export default function WorksIndex() {
  return (
    <div className="w-screen bg-black dark:bg-white dark:text-black text-white">
      <section className="w-full lg:max-w-screen-2xl grid gap-5 md:grid-cols-2 lg:grid-cols-3 pt-24 px-10 justify-items-center">
        {data.map((item: any) => {
          return (
            <div>
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
