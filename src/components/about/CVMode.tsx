import Jobs from "../CV/Jobs";
import Links from "../CV/Links";
import Skills from "../CV/Skills";
import Details from "../CV/Details";
import Profile from "../CV/Profile";
import Projects from "../CV/Projects";
import Languages from "../CV/Languages";
import Educations from "../CV/Educations";
import SoftSkills from "../CV/SoftSkills";
import HeaderTitle from "../CV/HeaderTitle";

export default function CV() {
  return (
    <>
      <HeaderTitle />
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
