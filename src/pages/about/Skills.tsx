import SkillBtn from "../../components/SkillBtn";
import skills from "../../data/skils.json";
import data from "../../data/info.json";

export default function Skills() {
  const info = data[0];
  return (
    <div className="px-10 pt-5 md:pt-10 md:px-20 lg:px-52 select-none text-center">
      <h1 className="text-5xl md:text-7xl lg:text-9xl w-fit mx-auto font-bold mt-10 mb-5 bg-gradient-to-r from-blue-400 dark:from-blue-700 to-purple-500 dark:to-purple-700 bg-clip-text text-transparent">Skills</h1>
      <p className="text-xs md:text-base py-5">{info.skillDescBase}</p>

      <div className="flex flex-wrap gap-5 justify-center mb-5 md:mb-10">
        {skills.map((skill, index) => (
          <SkillBtn
            key={index}
            title={skill.title}
            icon={skill.img}
            textColor={skill.textColor}
            bgColor={skill.bgColor}
          />
        ))}
      </div>

      <p className="text-center md:pt-5 text-xs md:text-base">{info.softSkillsDesc}</p>
      <div>
        <ul className="mt-5 ps-5 grid grid-cols-1 md:grid-cols-2 justify-items-center">
          {info.softSkills.map((item, index) => (
            <li className="text-xs md:text-base md:font-semibold after:px-1 before:px-1" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
