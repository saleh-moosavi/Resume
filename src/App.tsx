import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import themeContext from "./context/theme";
import { useState, Suspense } from "react";
import { Loading } from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <themeContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
      <Footer />
    </themeContext.Provider>
  );
}

export default App;
