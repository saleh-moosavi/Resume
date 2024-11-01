import Skills from "./Skills";
import data from "../../data/info.json";
import SoftSkills from "./SoftSkills";
import { Link } from "react-router-dom";

export default function AboutIndex() {
  return (
    <div className="grid lg:grid-cols-2 gap-y-10 justify-items-center items-center gap-x-5 pt-20 pb-10 px-5 min-h-screen max-w-7xl mx-auto">
      {/* about me sect */}
      <article className="rounded-lg self-center relative max-w-[35rem] w-full shadow-[2px_2px_8px_#fff] dark:shadow-[2px_2px_8px_#000] p-5">
        <h2 className="absolute -top-4 font-semibold text-2xl xl:text-3xl xl:-top-5 bg-black dark:bg-white">
          About Me
        </h2>
        <div className="py-5">
          <img
            className="w-full max-w-[35rem] rounded-lg h-72 object-cover"
            src="https://avatars.githubusercontent.com/u/184298358?v=4"
          />
        </div>
        <h2 className="text-center font-bold text-2xl md:my-5">
          Saleh Moosavi
        </h2>
        <p className="lg:font-semibold py-5 text-justify">
          {data[0].skillDescBase}
        </p>
        <Link to={"/contact"}>
          <p className="shadow-[2px_2px_8px_#fff] dark:shadow-[2px_2px_8px_#000] px-5 py-2 font-semibold rounded-full w-fit mx-auto mb-5 cursor-pointer hover:shadow-[2px_2px_8px_rgb(134_25_143)] dark:hover:shadow-[2px_2px_8px_rgb(0_0_255)] transition-all duration-500">
            Message Me
          </p>
        </Link>
      </article>
      {/* skills sect */}
      <section className="w-full flex flex-col gap-10 lg:gap-24 max-w-[35rem]">
        {/* Languages & Tools sect */}
        <article className="p-3 rounded-lg relative w-full my-10 lg:my-0 shadow-[2px_2px_8px_#fff] dark:shadow-[2px_2px_8px_#000]">
          <h2 className="absolute -top-4 font-semibold text-2xl xl:text-3xl xl:-top-5 bg-black dark:bg-white">
            Languages & Tools
          </h2>
          <Skills />
        </article>
        {/* Soft Skills sect */}
        <article className="p-3 rounded-lg relative max-w-[35rem] w-full shadow-[2px_2px_8px_#fff] dark:shadow-[2px_2px_8px_#000]">
          <h2 className="absolute -top-4 font-semibold text-2xl xl:text-3xl xl:-top-5 bg-black dark:bg-white">
            Soft Skills
          </h2>
          <SoftSkills />
        </article>
      </section>
    </div>
  );
}
