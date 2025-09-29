import { useRef } from "react";
import data from "../../data/info.json";

interface infoType {
  name: string;
  desc: string;
  skillDescBase: string;
  softSkills: string[];
}

export default function Info() {
  const info: infoType = data[0];
  const hero: any = useRef(null);

  //scroll to end of the component
  function scrollToDown() {
    window.scrollTo(0, hero?.current.offsetHeight - 50);
  }
  return (
    <div
      ref={hero}
      className="w-screen h-screen flex flex-col justify-center items-center text-center px-10"
    >
      <h3 className="text-lg md:text-2xl font-semibold">Hey There</h3>
      <h3 className="text-xl md:text-4xl font-semibold">I'm {info.name}</h3>
      <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] pt-10 pb-7 font-medium drop-shadow-[0_0_7px_rgb(29_78_216)] dark:drop-shadow-[0_0_10px_#f0c0f0] bg-clip-text text-transparent bg-gradient-to-r from-[#bf2fcf] dark:from-[#3d45bd] to-[#2e75e0] dark:to-[#b94ec5] select-none">
        FRONTEND
        <br />
        DEVELOPER
      </h1>
      <p className="w-[23.25rem] sm:w-[31rem] md:w-[41.5rem] lg:w-[52.54rem] text-xs sm:text-sm font-medium md:text-base">
        {info.desc}
      </p>
      <div className="bg-white shadow-[0_0_15px_#fff] dark:shadow-[0_0_15px_#000] p-1 mt-10 flex items-center rounded-full cursor-pointer animate-bounce">
        <img src="./assets/Arrow-Down.svg" onClick={scrollToDown} />
      </div>
    </div>
  );
}
