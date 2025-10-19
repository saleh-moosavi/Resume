import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  icon?: ReactNode;
  classes?: string;
  children: string;
}

export default function LinkButton({
  link,
  icon,
  classes = "bg-my-darkgray hover:bg-my-darkgray/60",
  children,
}: Props) {
  return (
    <Link
      to={link}
      target="_blank"
      className={`flex items-center gap-2 ${classes} p-2 rounded-lg transition-all duration-200`}
    >
      {icon && <span className="*:size-5">{icon}</span>}
      {children}
    </Link>
  );
}
