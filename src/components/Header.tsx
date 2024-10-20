import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    function handleSize() {
      setWindowScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleSize);
    return () => {
      window.removeEventListener("scroll", handleSize);
    };
  }, []);

  //change darkMode and lightMode (More in tailwind.config.js)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`flex justify-between text-white px-5 py-1 items-center fixed top-0 right-0 left-0 transition-all duration-500 ${
        windowScrollY > 50
          ? "shadow-md shadow-stone-300/20 backdrop-blur-md z-50"
          : ""
      }`}
    >
      <section className="flex gap-x-3 items-center">
        {/* Light/Dark Mode Button */}
        <Link to="/">
          <img
            className="w-8"
            src={`${darkMode ? "./assets/LogoDark.png" : "./assets/Logo.svg"}`}
            alt=""
          />
        </Link>
        <img
        className="cursor-pointer w-6 h-6"
          onClick={toggleDarkMode}
          src={`${darkMode ? "./assets/Moon.svg" : "./assets/Sun.svg"}`}
        />
      </section>
      <ul className="flex gap-x-5 text-xs font-semibold dark:*:text-black hover:*:cursor-pointer hover:*:text-stone-300 dark:hover:*:text-stone-500 hover:*:transition-all hover:*:duration-300">
        <li><Link to="works">WORKS</Link></li>
        <li><Link to="blog">BLOG</Link></li>
        <li><Link to="about">ABOUT</Link></li>
        <li><Link to="contact">CONTACT</Link></li>
      </ul>
    </div>
  );
}
