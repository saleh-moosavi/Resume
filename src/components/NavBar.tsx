import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="flex gap-x-5 text-xs font-semibold dark:*:text-black hover:*:cursor-pointer hover:*:text-stone-300 dark:hover:*:text-stone-500 hover:*:transition-all hover:*:duration-300">
      <li>
        <Link to="works">WORKS</Link>
      </li>
      <li>
        <Link to="blog">BLOG</Link>
      </li>
      <li>
        <Link to="about">ABOUT</Link>
      </li>
      <li>
        <Link to="contact">CONTACT</Link>
      </li>
    </ul>
  );
}
