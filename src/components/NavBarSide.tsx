import { Link } from "react-router-dom";
import { NavBarSideType } from "../types/dataType";
import { BiX } from "react-icons/bi";

export default function NavBarSide({ isClose, handleSideBar }: NavBarSideType) {
  return (
    <div>
      <section
        onClick={handleSideBar}
        className={`bg-my-white/20 fixed inset-0 z-[500] backdrop-blur-sm ${
          isClose ? "invisible" : "visible"
        }`}
      ></section>
      <ul
        className={`flex flex-col gap-y-5 fixed top-0 bottom-0 right-0 w-2/3 p-10 hover:*:cursor-pointer bg-my-lightgray dark:bg-my-darkgray shadow-lg z-[1000] font-semibold transition-all duration-300 ${
          isClose ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <li onClick={handleSideBar}>
          <BiX className="size-8 text-orange-500 hover:rotate-180 hover:text-rose-600 dark:hover:text-rose-600 transition-all duration-300" />
        </li>
        <li className="mt-5" onClick={handleSideBar}>
          <Link
            className="text-my-black hover:opacity-50 dark:text-my-white transition-all duration-300"
            to="works"
          >
            WORKS
          </Link>
        </li>
        <li onClick={handleSideBar}>
          <Link
            className="text-my-black hover:opacity-50 dark:text-my-white transition-all duration-300"
            to="blog"
          >
            BLOG
          </Link>
        </li>
        <li onClick={handleSideBar}>
          <Link
            className="text-my-black hover:opacity-50 dark:text-my-white transition-all duration-300"
            to="about"
          >
            ABOUT
          </Link>
        </li>
        <li onClick={handleSideBar}>
          <Link
            className="text-my-black hover:opacity-50 dark:text-my-white transition-all duration-300"
            to="contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
