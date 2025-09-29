import SkillBtn from "../SkillBtn";
import skills from "../../data/skils.json";

export default function Skills() {
  return (
    <div className="pt-5 md:pt-10 select-none text-center">
      <div className="flex flex-wrap justify-center justify-items-center gap-5 mb-5 md:mb-10">
        {skills.map((skill, index:number) => (
          <SkillBtn
            key={index}
            title={skill.title}
            icon={skill.img}
            bgColor={skill.bgColor}
          />
        ))}
      </div>
    </div>
  );
}
