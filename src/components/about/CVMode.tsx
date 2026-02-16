import Jobs from "../CV/Jobs";
import Links from "../CV/Links";
import Skills from "../CV/Skills";
import Details from "../CV/Details";
import Profile from "../CV/Profile";
import Projects from "../CV/Projects";
import Languages from "../CV/Languages";
import data from "../../data/data.json";
import Educations from "../CV/Educations";
import SoftSkills from "../CV/SoftSkills";

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto bg-stone-200 shadow-lg rounded-lg my-20 p-10 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">{data.info.name}</h1>
        <p className="text-xl text-gray-600 font-semibold">
          {data.info.job_title}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1 space-y-10">
          <Details details={data.details} />
          <Links links={data.links} />
          <Skills skills={data.skills} />
          <Languages languages={data.languages} />
        </div>
        <div className="col-span-3 space-y-10">
          <Profile text={data.info.profile} />
          <Jobs jobs={data.jobs} />
          <Projects projects={data.projects} />
          <SoftSkills softSkills={data.soft_skills} />
          <Educations educations={data.educations} />
        </div>
      </div>
    </div>
  );
}
