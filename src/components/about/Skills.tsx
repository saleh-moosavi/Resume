import SkillBtn from "../SkillBtn";
import skills from "../../data/skils.json";

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-5 pt-4 select-none">
      {skills.map((skill, index: number) => (
        <SkillBtn
          key={index}
          title={skill.title}
          icon={skill.img}
          bgColor={skill.bgColor}
        />
      ))}
    </div>
  );
}
