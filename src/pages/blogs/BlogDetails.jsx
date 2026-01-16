import { useParams } from "react-router-dom";
import { getBlogs } from "../../utils/localStorage";

export default function BlogDetails() {
    const { id } = useParams();
    const blogs = getBlogs();

    const blog = blogs.find(b => b.id === Number(id));

    if (!blog) return <h2>Blog not found</h2>;

    return (
        <div className="container mt-4">
            <h2>{blog.title}</h2>
            <img src={blog.image} alt={blog.title} className="img-fluid mb-3" />
            <p>{blog.description}</p>
        </div>
    );
}
