import { createContext } from "react";
interface ThemeProviderProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const themeContext = createContext<ThemeProviderProps>({
  isDark: false,
  setIsDark: (isDark) => {
    isDark;
  },
});

export default themeContext;
