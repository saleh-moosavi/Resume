import data from "../../data/portfolio.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PortfolioItem(props: { isDark: boolean }) {
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
      {data.map(
        (
          item: {
            img: string;
            title: string;
            desc: string;
            imgDark: string;
            isFavor: boolean;
            link: string;
          },
          index: number
        ) => {
          if (item.isFavor) {
            return (
              <div key={index}>
                <SwiperSlide className="w-2/3 md:w-1/2" key={index}>
                  <a href={item.link} target="_blank">
                    <img
                      className="w-full object-cover rounded-lg"
                      src={props.isDark ? item.img : item.imgDark}
                      alt=""
                    />
                    <h2 className="text-white font-bold dark:text-black text-center mt-5">
                      {item.title}
                    </h2>
                    <p className="text-white text-sm md:text-sm dark:text-black text-center line-clamp-1">
                      {item.desc}
                    </p>
                  </a>
                </SwiperSlide>
              </div>
            );
          }
        }
      )}
    </Swiper>
  );
}
