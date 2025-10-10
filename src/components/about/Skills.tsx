import SkillBtn from "../SkillBtn";
import { LanguagesAndTools } from "../../constants/LanguagesAndTools";

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-5 pt-4 select-none">
      {LanguagesAndTools.map((skill, index: number) => (
        <SkillBtn
          key={index}
          title={skill.title}
          icon={skill.icon}
          bgColor={skill.bgColor}
        />
      ))}
    </div>
  );
}
