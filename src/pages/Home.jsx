import { useNavigate } from "react-router-dom";
import BlogCard from "../components/UI/BlogCard";
import { getBlogs } from "../utils/localStorage";

export default function Home() {
    const navigate = useNavigate();
    const blogs = getBlogs();
    const bestBlogs = blogs.slice(0, 5); // Select top 5 for "Best Blogs"

    const handleExplore = () => {
        document.getElementById("latest-blogs").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="home">

            {/* HERO SECTION */}
            <div className="hero-section">
                <h1>NEXORA</h1>
                <p>Where Thoughts Meet Technology</p>
                <button onClick={handleExplore}>Explore Blogs</button>
            </div>

            {/* BEST BLOGS SECTION */}
            <div className="container mt-5">
                <h2 className="mb-4 text-center" style={{ color: "var(--hero-title-color)" }}>Best Blogs</h2>
                <div className="row flex-nowrap overflow-auto pb-4" style={{ gap: "20px" }}>
                    {bestBlogs.map((blog) => (
                        <div key={blog.id} className="col-10 col-md-5 col-lg-4" style={{ flex: "0 0 auto" }}>
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>

            {/* LATEST BLOGS */}
            <h2 id="latest-blogs" className="latest-title">Latest Blogs</h2>

            <div className="blog-grid">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

        </div>
    );
}
