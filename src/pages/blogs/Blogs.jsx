import BlogCard from "../../components/UI/BlogCard";
import { getBlogs } from "../../utils/localStorage";

export default function Blogs() {
    const blogs = getBlogs();

    return (
        <div className="container mt-4">
            <h2>All Blogs</h2>

            <div className="row">
                {blogs.map(blog => (
                    <div className="col-md-4 mb-3" key={blog.id}>
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </div>
        </div>
    );
}
