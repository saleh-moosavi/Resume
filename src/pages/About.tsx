import Skills from "../components/about/Skills";
import SoftSkills from "../components/about/SoftSkills";

export default function AboutIndex() {
  return (
    <div className="grid lg:grid-cols-2 gap-y-10 justify-items-center items-center gap-x-5 pt-20 pb-10 px-5 min-h-screen max-w-7xl mx-auto">
      {/* about me sect */}
      <article className="rounded-lg self-center relative max-w-[35rem] w-full my-shadow h-full">
        <img
          className="w-full max-w-[35rem] rounded-lg object-cover"
          src="https://avatars.githubusercontent.com/u/184298358?v=4"
        />
      </article>
      {/* skills sect */}
      <section className="w-full h-full flex flex-col justify-between gap-10 lg:gap-24 max-w-[35rem]">
        {/* Languages & Tools sect */}
        <article className="p-3 rounded-lg relative w-full my-10 lg:my-0 my-shadow">
          <h2 className="absolute -top-4 font-semibold text-2xl xl:text-3xl xl:-top-5 bg-my-white dark:bg-my-black">
            Languages & Tools
          </h2>
          <Skills />
        </article>
        {/* Soft Skills sect */}
        <article className="p-3 rounded-lg relative max-w-[35rem] w-full my-shadow">
          <h2 className="absolute -top-4 font-semibold text-2xl xl:text-3xl xl:-top-5 bg-my-white dark:bg-my-black">
            Soft Skills
          </h2>
          <SoftSkills />
        </article>
      </section>
    </div>
  );
}
