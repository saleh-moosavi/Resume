
export default function SkillBtn(props:any) {
  return (
    <button className="flex items-center gap-x-2 px-4 py-1" style={{ backgroundColor: props.bgColor, color: props.textColor }}>
        <img className="w-5 md:w-6" src={props.icon} alt="" />
        <p className="text-xs md:text-base">{props.title}</p>
    </button>
  )
}
