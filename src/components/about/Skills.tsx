import SkillBtn from "../SkillBtn";
import { mySkills } from "../../constants";
import ContentWrapper from "./ContentWrapper";

export default function Skills() {
  return (
    <ContentWrapper title="Languages & Tools">
      <div className="flex flex-wrap justify-between items-center gap-5 pt-4 select-none">
        {mySkills.map((skill, index: number) => (
          <SkillBtn
            key={index}
            title={skill.title}
            icon={skill.icon}
            bgColor={skill.bgColor}
          />
        ))}
      </div>
    </ContentWrapper>
  );
}
