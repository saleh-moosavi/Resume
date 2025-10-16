import "swiper/css";
import Slide from "./Slide";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../data/portfolio.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioType } from "../../types/dataType";

export default function SliderWrapper() {
  return (
    <Swiper
      slidesPerView={1.1}
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
                <Slide item={item} />
              </SwiperSlide>
            </div>
          );
        }
      })}
    </Swiper>
  );
}
