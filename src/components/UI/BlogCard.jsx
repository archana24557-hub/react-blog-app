import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    if (!blog) return null;

    return (
        <div className="card shadow-sm">
            <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
            />

            <div className="card-body">
                <h5>{blog.title}</h5>
                <p>{blog.description.slice(0, 80)}...</p>

                <Link to={`/blogs/${blog.id}`} className="btn btn-primary">
                    Read More
                </Link>
            </div>
        </div>
    );
}
