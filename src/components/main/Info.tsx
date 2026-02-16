import { useRef } from "react";
import { myInfo } from "../../constants";
import { IoIosArrowDown } from "react-icons/io";

export default function Info() {
  const hero = useRef<HTMLDivElement>(null);

  //scroll to end of the component
  function scrollToDown() {
    if (hero.current) {
      window.scrollTo({
        top: hero.current.offsetHeight - 50,
        behavior: "smooth",
      });
    }
  }

  return (
    <div
      ref={hero}
      className="w-screen h-screen flex flex-col justify-center items-center text-center px-10"
    >
      <h3 className="text-lg md:text-2xl font-semibold">Hey There</h3>
      <h3 className="text-xl md:text-4xl font-semibold">I'm {myInfo.name}</h3>
      <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] pt-10 pb-7 font-medium drop-shadow-[0_0_10px_#f0c0f0] dark:drop-shadow-[0_0_10px_#1d4ed8] bg-clip-text text-transparent bg-gradient-to-r from-my-darkpurple dark:from-my-darkblue to-my-lightblue dark:to-my-lightpurple select-none">
        FRONTEND
        <br />
        DEVELOPER
      </h1>
      <p className="w-[23.25rem] sm:w-[31rem] md:w-[41.5rem] lg:w-[52.54rem] text-xs sm:text-sm font-medium md:text-base">
        {myInfo.desc}
      </p>
      <div className="bg-my-white shadow-md shadow-my-black dark:shadow-my-white p-1 mt-10 flex items-center rounded-full cursor-pointer animate-bounce">
        <IoIosArrowDown
          className="text-my-black size-5"
          onClick={scrollToDown}
        />
      </div>
    </div>
  );
}
