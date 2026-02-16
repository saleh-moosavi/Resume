import "swiper/css";
import Slide from "./Slide";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { portfolio } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";

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
      {portfolio.map((item, index: number) => {
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
