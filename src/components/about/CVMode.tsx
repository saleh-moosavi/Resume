import Jobs from "../CV/Jobs";
import Links from "../CV/Links";
import Skills from "../CV/Skills";
import Details from "../CV/Details";
import Profile from "../CV/Profile";
import Projects from "../CV/Projects";
import Languages from "../CV/Languages";
import { myInfo } from "../../constants";
import Educations from "../CV/Educations";
import SoftSkills from "../CV/SoftSkills";

export default function CV() {
  return (
    <>
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-bold text-gray-900">{myInfo.name}</h1>
        <p className="text-xl text-gray-600 font-semibold">
          {myInfo.job_title}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 space-y-10">
          <Details />
          <Links />
          <Skills />
          <Languages />
        </div>
        <div className="col-span-9 space-y-10">
          <Profile />
          <Jobs />
          <Projects />
          <SoftSkills />
          <Educations />
        </div>
      </div>
    </>
  );
}
