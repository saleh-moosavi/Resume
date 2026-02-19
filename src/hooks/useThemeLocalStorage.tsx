import themeContext from "../context/theme";
import { useContext, useEffect } from "react";

export default function useThemeLocalStorage() {
  const { isDark, setIsDark } = useContext(themeContext);
  useEffect(() => {
    //check dark or light mode from last closing of page
    const checkIsDark = localStorage.getItem("isDark");
    if (checkIsDark) {
      setIsDark(JSON.parse(checkIsDark || ""));
    } else {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    }
    if (JSON.parse(checkIsDark || "")) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  //change darkMode and lightMode (More in tailwind.config.js)
  const toggleisDark = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return { isDark, setIsDark, toggleisDark };
}
