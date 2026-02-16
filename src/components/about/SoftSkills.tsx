import { mySoftSkills } from "../../constants";

export default function SoftSkills() {
  return (
    <ul>
      {mySoftSkills.map((item: string, index: number) => (
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
