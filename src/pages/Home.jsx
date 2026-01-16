import BlogCard from "../components/UI/BlogCard";
import { getBlogs } from "../utils/localStorage";

export default function Home() {
    const blogs = getBlogs();

    return (
        <div className="home">

            {/* HERO SECTION */}
            <div className="hero-section">
                <h1>NEXORA</h1>
                <p>Where Thoughts Meet Technology</p>
                <button>Explore Blogs</button>
            </div>

            {/* BLOGS */}
            <h2 className="latest-title">Latest Blogs</h2>

            <div className="blog-grid">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

        </div>
    );
}
