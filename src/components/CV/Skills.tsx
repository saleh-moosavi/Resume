import Title from "./Title";
import { mySkills } from "../../constants";

export default function Skills() {
  return (
    <section>
      <Title text="Skills" />
      <div className="flex flex-col gap-5">
        {mySkills.map((skill, index) => (
          <p key={index} className="font-semibold text-black text-sm">
            {skill.title}
          </p>
        ))}
      </div>
    </section>
  );
}
