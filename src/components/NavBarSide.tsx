import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { navLivks } from "../constants";
import { NavBarSideType } from "../types/dataType";

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
        {navLivks.map((item, index) => (
          <li
            key={index + item.href}
            onClick={handleSideBar}
            className={`${index == 0 ? "mt-5" : ""}`}
          >
            <Link
              className="text-my-black hover:opacity-50 dark:text-my-white transition-all duration-300"
              to={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
