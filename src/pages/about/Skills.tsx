import SkillBtn from "../../components/SkillBtn";
import skills from "../../data/skils.json";

export default function Skills() {
  return (
    <div className="pt-5 md:pt-10 select-none text-center">
      <div className="grid grid-cols-5 justify-items-center gap-5 mb-5 md:mb-10">
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
    </div>
  );
}
