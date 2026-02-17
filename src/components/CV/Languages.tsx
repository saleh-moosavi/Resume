import Title from "./Title";
import { myLanguages } from "../../constants";

export default function Languages() {
  return (
    <section>
      <Title text="Languages" />
      <div className="space-y-2">
        {myLanguages.map((language, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-black font-semibold">
              {language.name}
            </span>
            <span className="text-xs text-gray-500 font-semibold">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
