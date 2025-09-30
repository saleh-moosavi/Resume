import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="flex gap-x-5 text-xs font-semibold dark:*:text-my-white hover:*:cursor-pointer hover:*:text-my-darkgray dark:hover:*:text-my-lightgray hover:*:transition-all hover:*:duration-300">
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
