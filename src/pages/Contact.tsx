import { useContext } from "react";
import { myLinks } from "../constants";
import themeContext from "../context/theme";

export default function ContactIndex() {
  const { isDark } = useContext(themeContext);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="text-lg font-semibold scale-down">Scan Me</p>
      <img
        className="w-52 mb-5 mt-2 scale-down"
        src={`./assets/contact/QrCode-${isDark ? "white" : "black"}.png`}
        alt="Qr Code"
      />
      <p className="text-lg font-semibold fade-in">Or</p>
      <ul className="flex *:mx-5 items-center mt-5 fade-in *:max-w-10">
        {myLinks.map((item, index) => (
          <li
            key={"contact" + index}
            className="hover:-translate-y-2 transition-all duration-500"
          >
            <a href={item.url} target="_blank" className="*:size-10">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
