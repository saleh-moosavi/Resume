import data from "../../data/info.json";
import { infoType } from "../../types/dataType";

export default function SoftSkills() {
  const info: infoType = data[0];
  return (
    <ul>
      {info.softSkills.map((item: string, index: number) => (
        <li
          className="text-xs sm:text-base lg:font-semibold leading-6"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
