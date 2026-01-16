import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogs/BlogDetails";
import CreateBlog from "./pages/blogs/CreateBlog";
import EditBlog from "./pages/blogs/EditBlog";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
