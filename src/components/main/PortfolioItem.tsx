import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../data/portfolio.json";
import { Swiper, SwiperSlide } from "swiper/react";

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
                      src={props.isDark ? item.imgDark : item.img}
                      alt=""
                    />
                    <h2 className="font-bold text-center mt-5">{item.title}</h2>
                    <p className="text-sm md:text-sm text-center line-clamp-1">
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
