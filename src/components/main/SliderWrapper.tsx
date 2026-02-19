import Slide from "./Slide";
import "keen-slider/keen-slider.min.css";
import { portfolio } from "../../constants";
import { useKeenSlider } from "keen-slider/react";

export default function SliderWrapper() {
  const favoriteItems = portfolio.filter((item) => item.isFavor);

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 1080px)": {
        slides: { perView: 2.1, spacing: 10 },
      },
    },
    slides: {
      perView: 1.1,
      spacing: 10,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {favoriteItems.map((item, index) => (
        <div key={index} className="keen-slider__slide">
          <Slide item={item} />
        </div>
      ))}
    </div>
  );
}
