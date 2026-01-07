import { useParams, Link } from "react-router-dom";
import { getBlogs } from "../utils/localStorage";

export default function BlogDetails() {
    const { id } = useParams();

    const blogs = getBlogs();
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-xl font-bold">Blog not found</h2>
                <Link to="/blogs" className="text-blue-600 underline">
                    ← Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Back Button */}
            <Link
                to="/blogs"
                className="text-blue-600 font-medium hover:underline"
            >
                ← Back to Blogs
            </Link>

            {/* Blog Content */}
            <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>

            <div className="text-gray-500 text-sm mt-2">
                {blog.author} • {blog.date} • {blog.category}
            </div>

            <p className="text-gray-700 mt-6 leading-relaxed">
                {blog.content}
            </p>

            {/* Edit Button */}
            <div className="mt-6">
                <Link
                    to={`/edit/${blog.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Edit Blog
                </Link>
            </div>
        </div>
    );
}
