import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import themeContext from "./context/theme";
import { useState, Suspense } from "react";
import { Loading } from "./components/Loading";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <themeContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </themeContext.Provider>
  );
}

export default App;
