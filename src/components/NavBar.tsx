import { Link } from "react-router-dom";
import { navLivks } from "../constants/navBarLinks";

export default function NavBar() {
  return (
    <ul className="flex gap-x-5 text-xs font-semibold dark:*:text-my-white hover:*:cursor-pointer hover:*:text-my-darkgray dark:hover:*:text-my-lightgray hover:*:transition-all hover:*:duration-300">
      {navLivks.map((link) => (
        <li key={link.href}>
          <Link to={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
