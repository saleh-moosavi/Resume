import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loading } from "./components/Loading";
import { lazy, useState, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Main"));
const Blog = lazy(() => import("./pages/Blog"));
const Works = lazy(() => import("./pages/Works"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Index isDark={isDark} />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact isDark={isDark} />} />
            <Route path="/works" element={<Works isDark={isDark} />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
