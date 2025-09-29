import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loading } from "./components/Loading";
import { lazy, useState, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/main/Index"));
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const WorksIndex = lazy(() => import("./pages/works/WorksIndex"));
const AboutIndex = lazy(() => import("./pages/about/AboutIndex"));
const ContactIndex = lazy(() => import("./pages/contact/ContactIndex"));

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Index isDark={isDark} />} />
            <Route path="/about" element={<AboutIndex />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/contact" element={<ContactIndex isDark={isDark} />} />
            <Route path="/works" element={<WorksIndex isDark={isDark} />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
