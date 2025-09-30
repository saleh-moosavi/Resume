export default function ContactIndex({ isDark }: { isDark: boolean }) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="text-lg font-semibold scale-down">Scan Me</p>
      <img
        className="w-40 mb-5 mt-2 scale-down"
        src={`./assets/contact/QrCode-${isDark ? "white" : "black"}.svg`}
        alt=""
      />
      <p className="text-lg font-semibold fade-in">Or</p>
      <ul className="flex *:mx-5 items-center mt-5 fade-in">
        {/* telegram */}
        <li className="hover:-translate-y-2 transition-all duration-500">
          <a href="https://t.me/Smous" target="_blank">
            <img
              className="w-10"
              src={`./assets/contact/telegram-${
                isDark ? "white" : "black"
              }.svg`}
            />
          </a>
        </li>
        {/* linkedin */}
        <li className="hover:-translate-y-2 transition-all duration-500">
          <a href="">
            <img
              className="w-10"
              src={`./assets/contact/linkedin-${
                isDark ? "white" : "black"
              }.svg`}
              alt=""
            />
          </a>
        </li>
        {/* github */}
        <li className="hover:-translate-y-2 transition-all duration-500">
          <a href="https://github.com/saleh-moosavi" target="_blank">
            <img
              className="w-10"
              src={`./assets/contact/github-${isDark ? "white" : "black"}.svg`}
              alt=""
            />
          </a>
        </li>
        {/* email */}
        <li className="hover:-translate-y-2 transition-all duration-500">
          <a href="mailto:https://salehmoosavi77@gmail.com" target="_blank">
            <img
              className="w-10"
              src={`./assets/contact/email-${isDark ? "white" : "black"}.svg`}
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
