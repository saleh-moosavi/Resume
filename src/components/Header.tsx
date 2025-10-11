import NavBar from "./NavBar";
import NavBarSide from "./NavBarSide";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import themeContext from "../context/theme";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";

export default function Header() {
  const { isDark, setIsDark } = useContext(themeContext);
  const [isSidebarClose, setIsSidebarClose] = useState<boolean>(true);
  const [windowSize, setwindowSize] = useState<number>(window.innerWidth);
  const [windowScrollY, setWindowScrollY] = useState<number>(window.scrollY);

  useEffect(() => {
    //check dark or light mode from last closing of page
    localStorage.getItem("isDark")
      ? setIsDark(JSON.parse(localStorage.getItem("isDark") || ""))
      : localStorage.setItem("isDark", JSON.stringify(isDark));
    if (JSON.parse(localStorage.getItem("isDark") || "")) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
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
  const toggleisDark = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
    setIsDark(!isDark);
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
