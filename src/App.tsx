import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/index";
import Header from "./components/Header";
import AboutIndex from "./pages/about/AboutIndex";
import BlogIndex from "./pages/blog/BlogIndex";
import ContactIndex from "./pages/contact/ContactIndex";
import WorksIndex from "./pages/works/WorksIndex";


function App() {
  return (
    <div className="h-screen bg-black dark:bg-white dark:text-black text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutIndex />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/contact" element={<ContactIndex />} />
          <Route path="/works" element={<WorksIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
