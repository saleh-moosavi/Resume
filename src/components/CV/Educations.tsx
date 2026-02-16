import Title from "./Title";
import { myEducations } from "../../constants";

export default function Educations() {
  return (
    <section>
      <Title text="Educations" />
      <article className="space-y-5">
        {myEducations.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">
                {edu.field} - {edu.level}
              </h3>
              <span className="text-xs font-semibold text-black">
                {edu.duration}
              </span>
            </div>
            <p className="text-sm text-gray-500 font-semibold">
              {edu.university}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
