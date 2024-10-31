import data from "../../data/portfolio.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCoverflow, Navigation } from "swiper/modules";

export default function PortfolioItem() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      pagination={true}
      navigation={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper pt-10"
    >
      {data.map((item: { img: string; title: string }, index: number) => {
        return (
          <div key={index}>
            <SwiperSlide className="w-2/3 md:w-1/2" key={index}>
              <img
                className="w-full object-cover rounded-lg"
                src={item.img}
                alt=""
              />
              <p className="text-white text-xs md:text-base dark:text-black text-center py-5">
                {item.title}
              </p>
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
}
