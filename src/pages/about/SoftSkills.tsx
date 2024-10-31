import data from "../../data/info.json";
interface infoType {
  name: string;
  desc: string;
  skillDescBase: string;
  softSkills: string[];
}
export default function SoftSkills() {
  const info: infoType = data[0];
  return (
    <ul className="my-5 flex flex-col justify-start gap-x-5">
      {info.softSkills.map((item: string, index: number) => (
        <li
          className="text-xs sm:text-base lg:font-semibold after:px-1 before:px-1 leading-6"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
