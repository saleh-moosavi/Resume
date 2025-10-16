import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LazyImage from "../Image";
import { useContext } from "react";
import data from "../../data/portfolio.json";
import themeContext from "../../context/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioType } from "../../types/dataType";
import { LuScreenShare, LuCodeXml } from "react-icons/lu";

export default function PortfolioItem() {
  const { isDark } = useContext(themeContext);
  return (
    <Swiper
      slidesPerView={1.1}
      loop={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        1080: {
          slidesPerView: 2.1,
        },
      }}
      className="mySwiper"
    >
      {data.map((item: portfolioType, index: number) => {
        if (item.isFavor) {
          return (
            <div key={index}>
              <SwiperSlide className="w-2/3 md:w-1/2" key={index}>
                <article className="relative overflow-hidden rounded-lg group cursor-grab">
                  <LazyImage
                    src={isDark ? item.imgDark : item.img}
                    alt={item.title}
                  />
                  <section className="translate-y-full group-hover:translate-y-0 absolute inset-0 flex flex-col justify-start items-center gap-5 bg-my-black/50 backdrop-blur-md text-my-white p-5 transition-all duration-300">
                    <h2 className="font-bold text-center select-none">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-sm text-center select-none">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-5 mt-auto ">
                      <a
                        href={item.demoLink}
                        target="_blank"
                        className="flex items-center gap-2 bg-my-darkpurple hover:bg-my-lightpurple p-2 rounded-lg"
                      >
                        <LuScreenShare className="size-5" />
                        Live Demo
                      </a>
                      <a
                        href={item.demoLink}
                        target="_blank"
                        className="flex items-center gap-2 bg-my-darkblue hover:bg-my-lightblue p-2 rounded-lg"
                      >
                        <LuCodeXml className="size-5" />
                        Source Code
                      </a>
                    </div>
                  </section>
                </article>
              </SwiperSlide>
            </div>
          );
        }
      })}
    </Swiper>
  );
}
