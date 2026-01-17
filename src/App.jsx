import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogs/BlogDetails";
import CreateBlog from "./pages/blogs/CreateBlog";
import EditBlog from "./pages/blogs/EditBlog";
import About from "./pages/About";
import { ThemeProvider } from "./context/ThemeContext";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
          <h1>Something went wrong.</h1>
          <pre style={{ color: "red" }}>{this.state.error.toString()}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ErrorBoundary>
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
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
