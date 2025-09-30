import NavBar from "./NavBar";
import NavBarSide from "./NavBarSide";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeaderType } from "../types/dataType";

export default function Header(props: HeaderType) {
  const [windowScrollY, setWindowScrollY] = useState<number>(window.scrollY);
  const [windowSize, setwindowSize] = useState<number>(window.innerWidth);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(true);

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
    setIsClose(!isClose);
    isClose
      ? document.documentElement.classList.add("overflow-hidden")
      : document.documentElement.classList.remove("overflow-hidden");
  };

  return (
    <>
      {windowSize <= 769 && (
        <NavBarSide isClose={isClose} handleSideBar={toggleSideBar} />
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
          <img
            id="themeToggle"
            className="cursor-pointer w-6 h-6"
            onClick={toggleDarkMode}
            src={`${darkMode ? "./assets/Sun.svg" : "./assets/Moon.svg"}`}
          />
        </section>
        {windowSize > 769 ? (
          <NavBar />
        ) : (
          <div onClick={toggleSideBar}>
            <svg
              className="w-6 h-6 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 6H6m12 4H6m12 4H6m12 4H6"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
