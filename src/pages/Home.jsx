import BlogCard from "../components/BlogCard";
import { getBlogs } from "../utils/localStorage";

export default function Home() {
    const blogs = getBlogs().slice(0, 3);

    return (
        <div className="container mt-4">

            {/* HERO SECTION */}
            <div className="hero-section text-white p-5 rounded mb-5">
                <h1 className="fw-bold display-5">
                    Upgrade Your Mind with Tech ✨
                </h1>
                <p className="mt-3 fs-5">
                    Read, Write & Share Knowledge on Technology & Learning
                </p>
                <a href="#/blogs" className="btn btn-warning mt-3 px-4 py-2 fw-bold">
                    Explore Blogs
                </a>
            </div>

            {/* LATEST BLOGS */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fw-bold">Latest Blogs</h3>
                <a href="#/blogs" className="text-decoration-none fw-bold">
                    View All →
                </a>
            </div>

            {blogs.length === 0 ? (
                <p>No blogs yet.</p>
            ) : (
                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-md-4 mb-4" key={blog.id}>
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
