interface SkillBtnType {
  bgColor: string;
  icon: string;
  title: string;
}

export default function SkillBtn(props: SkillBtnType) {
  return (
    <button
      className="flex items-center px-3 py-3 rounded-lg relative group z-20"
      style={{ backgroundColor: props.bgColor }}
    >
      <img className="w-8" src={props.icon} alt="" />
      <p className="absolute top-1/2 z-10 opacity-0 bg-gray-800 dark:text-white px-2 py-1 right-1/2 translate-x-1/2 rounded-lg group-hover:-top-10 group-hover:opacity-100 transition-all duration-500">
        {props.title}
      </p>
    </button>
  );
}
