import { Link } from "react-router-dom";
import { NavBarSideType } from "../types/dataType";



export default function NavBarSide({ isClose, handleSideBar }: NavBarSideType) {
  return (
    <div>
      <ul
        className={`flex flex-col gap-y-5 fixed top-0 bottom-0 right-0 w-2/3 p-10 hover:*:cursor-pointer bg-gray-800 dark:bg-gray-300 shadow-lg z-[1000] font-semibold *:transition-all *:duration-300 transition-all duration-300 ${
          isClose ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <li
          onClick={handleSideBar}
          className="text-orange-500 hover:scale-125 hover:text-rose-600 dark:hover:text-rose-600 w-fit"
        >
          X
        </li>
        <li
          className="dark:*:text-black hover:*:text-stone-300 dark:hover:*:text-stone-500 mt-10"
          onClick={handleSideBar}
        >
          <Link to="works">WORKS</Link>
        </li>
        <li
          className="dark:*:text-black hover:*:text-stone-300 dark:hover:*:text-stone-500"
          onClick={handleSideBar}
        >
          <Link to="blog">BLOG</Link>
        </li>
        <li
          className="dark:*:text-black hover:*:text-stone-300 dark:hover:*:text-stone-500"
          onClick={handleSideBar}
        >
          <Link to="about">ABOUT</Link>
        </li>
        <li
          className="dark:*:text-black hover:*:text-stone-300 dark:hover:*:text-stone-500"
          onClick={handleSideBar}
        >
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}
