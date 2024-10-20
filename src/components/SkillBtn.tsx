
export default function SkillBtn(props:any) {
  return (
    <button className="flex items-center gap-x-2 px-4 py-1" style={{ backgroundColor: props.bgColor, color: props.textColor }}>
        <img className="w-6" src={props.icon} alt="" />
        <p>{props.title}</p>
    </button>
  )
}
