import { SkillBtnType } from "../types/dataType";

export default function SkillBtn({ bgColor, icon, title }: SkillBtnType) {
  return (
    <button
      className="flex items-center px-3 py-3 rounded-lg relative group z-20 bg-[bgColor]"
      style={{ backgroundColor: bgColor }}
    >
      <span className="*:size-10 flex justify-center items-center *:fill-my-white">
        {icon}
      </span>
      <p className="absolute top-1/2 z-10 opacity-0 bg-my-darkgray text-my-white px-2 py-1 right-1/2 translate-x-1/2 rounded-lg group-hover:-top-10 group-hover:opacity-100 transition-all duration-500">
        {title}
      </p>
    </button>
  );
}
