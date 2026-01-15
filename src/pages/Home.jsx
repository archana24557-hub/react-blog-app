import BlogCard from "../components/BlogCard";
import { getBlogs } from "../utils/localStorage";

export default function Home() {
    const blogs = getBlogs();

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to BrainBloom 🧠</h1>
                <p>Explore Tech, Personal & Lifestyle blogs</p>

                <div className="filters">
                    <button>ALL</button>
                    <button>TECH</button>
                    <button>PERSONAL</button>
                    <button>LIFESTYLE</button>
                </div>
            </div>

            {/* Blog Section */}
            <div className="blog-grid">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
