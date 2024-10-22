import { useEffect, useState } from "react";

export default function ContactIndex(props: any) {
  //define a variable to track dark/light mood
  const [darkMood, setDarkMood] = useState<undefined | string>(undefined);

  useEffect(() => {
    setDarkMood(props.isDark);
  }, [props.isDark]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="text-lg font-semibold scale-down">Scan Me</p>
      <img
        className="w-40 mb-5 mt-2 scale-down"
        src={`./assets/contact/QrCode-${darkMood ? "black" : "white"}.svg`}
        alt=""
      />
      <p className="text-lg font-semibold fade-in">Or</p>
      <ul className="flex *:mx-5 items-center mt-5 fade-in">
        {/* telegram */}
        <li>
          <a href="https://t.me/Smous" target="_blank">
            <img
              className="w-10"
              src={`./assets/contact/telegram-${
                darkMood ? "black" : "white"
              }.svg`}
              alt=""
            />
          </a>
        </li>
        {/* linkedin */}
        <li>
          <a href="">
            <img
              className="w-10"
              src={`./assets/contact/linkedin-${
                darkMood ? "black" : "white"
              }.svg`}
              alt=""
            />
          </a>
        </li>
        {/* github */}
        <li>
          <a href="https://github.com/saleh-moosavi" target="_blank">
            <img
              className="w-10"
              src={`./assets/contact/github-${
                darkMood ? "black" : "white"
              }.svg`}
              alt=""
            />
          </a>
        </li>
        {/* email */}
        <li>
          <a href="mailto:https://salehmoosavi77@gmail.com" target="_blank">
            <img
              className="w-10"
              src={`./assets/contact/email-${darkMood ? "black" : "white"}.svg`}
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
