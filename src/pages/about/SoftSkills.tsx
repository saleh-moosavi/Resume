import data from "../../data/info.json";

export default function SoftSkills() {
  const info = data[0];
  return (
    <ul className="my-5 flex flex-col justify-start gap-x-5">
      {info.softSkills.map((item, index) => (
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
