import NavBar from "./NavBar";
import NavBarSide from "./NavBarSide";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import { HeaderType } from "../types/dataType";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function Header(props: HeaderType) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isSidebarClose, setIsSidebarClose] = useState<boolean>(true);
  const [windowSize, setwindowSize] = useState<number>(window.innerWidth);
  const [windowScrollY, setWindowScrollY] = useState<number>(window.scrollY);

  useEffect(() => {
    //check dark or light mode from last closing of page
    localStorage.getItem("isDark")
      ? setDarkMode(JSON.parse(localStorage.getItem("isDark") || ""))
      : localStorage.setItem("isDark", JSON.stringify(darkMode));
    if (JSON.parse(localStorage.getItem("isDark") || "")) {
      document.documentElement.classList.add("dark");
      props.setIsDark(true);
    }

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

  //change darkMode and lightMode (More in tailwind.config.js)
  const toggleDarkMode = () => {
    localStorage.setItem("isDark", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
    props.setIsDark(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

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
              src={`${
                darkMode ? "./assets/Logo.svg" : "./assets/LogoDark.png"
              }`}
              alt=""
            />
          </Link>
          {/* Light/Dark Mode Button */}
          <span className="cursor-pointer *:size-7" onClick={toggleDarkMode}>
            {darkMode ? (
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
