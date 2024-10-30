import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarSide from "./NavBarSide";

export default function Header(props: any) {
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);
  const [isClose, setIsClose] = useState(true);

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

  //change darkMode and lightMode (More in tailwind.config.js)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    props.setIsDark(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSideBar = ()=> {
    setIsClose(!isClose)
    isClose ? document.documentElement.classList.add("overflow-hidden") : document.documentElement.classList.remove("overflow-hidden")
  }

  return (
    <>
      {windowSize <= 769 && <NavBarSide isClose={isClose} handleSideBar={toggleSideBar}/>}
      <div
        //check scroll for adding shadow and blur to navbar
        className={`flex justify-between w-full z-20 text-white px-5 py-3 items-center fixed top-0 right-0 left-0 transition-all duration-500 ${
          windowScrollY > 50
            ? "shadow-md shadow-stone-300/20 backdrop-blur-md z-50"
            : ""
        }`}
      >
        <section className="flex gap-x-3 items-center">
          {/* logo img */}
          <Link to="/">
            <img
              className="w-8"
              src={`${
                darkMode ? "./assets/LogoDark.png" : "./assets/Logo.svg"
              }`}
              alt=""
            />
          </Link>
          {/* Light/Dark Mode Button */}
          <img
            id="themeToggle"
            className="cursor-pointer w-6 h-6"
            onClick={toggleDarkMode}
            src={`${darkMode ? "./assets/Moon.svg" : "./assets/Sun.svg"}`}
          />
        </section>
        {windowSize > 769 ? (
          <NavBar />
        ) : (
          <div onClick={toggleSideBar}>
            <svg
              className="w-6 h-6 text-white dark:text-black cursor-pointer"
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
