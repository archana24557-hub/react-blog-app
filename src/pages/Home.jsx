import BlogCard from "../components/BlogCard";
import { getBlogs } from "../utils/localStorage";

export default function Home() {
    const blogs = getBlogs().slice(0, 3);

    return (
        <div className="container mt-4">
            <div className="bg-primary text-white p-5 rounded mb-4">
                <h1 className="fw-bold">Welcome to TechGlaz Lab ✨</h1>
                <p className="mt-2">
                    A place where I share blogs on Tech, Education & Learning
                </p>
            </div>

            <h3 className="mb-3">Latest Blogs</h3>

            {blogs.length === 0 ? (
                <p>No blogs yet.</p>
            ) : (
                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-md-4 mb-3" key={blog.id}>
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
