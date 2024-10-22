import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/index";
import Header from "./components/Header";
import AboutIndex from "./pages/about/AboutIndex";
import BlogIndex from "./pages/blog/BlogIndex";
import ContactIndex from "./pages/contact/ContactIndex";
import WorksIndex from "./pages/works/WorksIndex";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isDark, setIsDark]:any = useState(false)
  return (
    <div className="">
      <BrowserRouter>
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutIndex />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/contact" element={<ContactIndex isDark={isDark}/>} />
          <Route path="/works" element={<WorksIndex />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
