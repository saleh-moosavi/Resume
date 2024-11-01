import { Link } from "react-router-dom";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio(props: { isDark: boolean }) {
  return (
    <div className="pb-20 px-10 md:px-20">
      <div className="flex items-center justify-between mb-12 lg:mb-16 p-5 bg-gray-900 dark:bg-gray-200 rounded-lg">
        <h1 className="md:text-3xl text-xl font-semibold select-none">
          Works
        </h1>
        <p className="text-[0.85rem] text-sky-100 dark:text-sky-950 dark:hover:text-purple-950 hover:text-purple-100 cursor-pointer">
          <Link to="./works">View More</Link>
        </p>
      </div>
      <PortfolioItem isDark={props.isDark} />
    </div>
  );
}
