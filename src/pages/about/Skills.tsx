import SkillBtn from "../../components/SkillBtn";
import skills from "../../data/skils.json";
import data from "../../data/info.json";

export default function Skills() {
  const info = data[0];
  return (
    <div className="px-10 pb-10 md:px-20 lg:px-52 select-none">
      <h1 className="text-5xl w-fit font-bold mt-10 mb-5 bg-gradient-to-r from-blue-400 dark:from-blue-700 to-purple-500 dark:to-purple-700 bg-clip-text text-transparent">Skills</h1>
      <p className="text-justify py-5">{info.skillDescBase}</p>

      <div className="flex flex-wrap gap-5 justify-start mb-10">
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

      <p className="text-justify pt-5">{info.softSkillsDesc}</p>
      <div>
        <ul className="mt-5 list-disc ps-5 *:text-sm *:font-semibold grid grid-cols-1 md:grid-cols-2">
          {info.softSkills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
