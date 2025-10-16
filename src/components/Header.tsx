import NavBar from "./NavBar";
import NavBarSide from "./NavBarSide";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import useThemeLocalStorage from "../hooks/useThemeLocalStorage";

export default function Header() {
  const { isDark, toggleisDark } = useThemeLocalStorage();
  const [isSidebarClose, setIsSidebarClose] = useState<boolean>(true);
  const [windowSize, setwindowSize] = useState<number>(window.innerWidth);
  const [windowScrollY, setWindowScrollY] = useState<number>(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      setWindowScrollY(window.scrollY);
    }
    function handleSize() {
      setwindowSize(window.innerWidth);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const toggleSideBar = () => {
    setIsSidebarClose(!isSidebarClose);
    isSidebarClose
      ? document.documentElement.classList.add("overflow-hidden")
      : document.documentElement.classList.remove("overflow-hidden");
  };

  return (
    <>
      {windowSize <= 769 && (
        <NavBarSide isClose={isSidebarClose} handleSideBar={toggleSideBar} />
      )}
      <div
        //check scroll for adding shadow and blur to navbar
        className={`flex justify-between w-full z-20 px-5 py-3 items-center fixed top-0 right-0 left-0 transition-all duration-500 ${
          windowScrollY > 50
            ? "shadow-md shadow-my-lightgray/20 backdrop-blur-md z-50"
            : ""
        }`}
      >
        <section className="flex gap-x-3 items-center">
          {/* logo img */}
          <Link to="/">
            <img
              className="w-8"
              src={`${isDark ? "./assets/Logo.svg" : "./assets/LogoDark.png"}`}
              alt=""
            />
          </Link>
          {/* Light/Dark Mode Button */}
          <span className="cursor-pointer *:size-7" onClick={toggleisDark}>
            {isDark ? (
              <IoSunny className="text-yellow-300" />
            ) : (
              <IoMoon className="text-blue-300" />
            )}
          </span>
        </section>
        {windowSize > 769 ? (
          <NavBar />
        ) : (
          <LuMenu className="size-7 cursor-pointer" onClick={toggleSideBar} />
        )}
      </div>
    </>
  );
}
