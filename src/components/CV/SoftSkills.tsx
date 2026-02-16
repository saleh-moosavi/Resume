import Title from "./Title";
import { mySoftSkills } from "../../constants";

export default function SoftSkills() {
  return (
    <section>
      <Title text="Soft Skills" />
      <div className="flex flex-col gap-1">
        {mySoftSkills.map((skill, index) => (
          <span key={index} className="text-gray-500 text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
