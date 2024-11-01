import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutIndex from "./pages/about/AboutIndex";
import BlogIndex from "./pages/blog/BlogIndex";
import ContactIndex from "./pages/contact/ContactIndex";
import WorksIndex from "./pages/works/WorksIndex";
import Footer from "./components/Footer";
import { useState } from "react";
import Index from "./pages/main/Index";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div className="">
      <BrowserRouter>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route path="/" element={<Index isDark={isDark} />} />
          <Route path="/about" element={<AboutIndex />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/contact" element={<ContactIndex isDark={isDark} />} />
          <Route path="/works" element={<WorksIndex isDark={isDark}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
