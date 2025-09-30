import { Link } from "react-router-dom";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio(props: { isDark: boolean }) {
  return (
    <div className="pb-20 px-10 md:px-20">
      <div className="flex items-center justify-between mb-10 lg:mb-16 p-3 md:p-5 bg-my-lightgray dark:bg-my-darkgray rounded-lg">
        <h1 className="md:text-3xl text-lg font-semibold select-none">Works</h1>
        <p className="text-[0.85rem] dark:hover:text-my-lightpurple hover:text-my-darkpurple cursor-pointer">
          <Link to="./works">View More</Link>
        </p>
      </div>
      <PortfolioItem isDark={props.isDark} />
    </div>
  );
}
