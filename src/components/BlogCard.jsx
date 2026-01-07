import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <span className="badge bg-secondary mb-2">
                    {blog.category}
                </span>

                <h5 className="card-title mt-2">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
            </div>

            <div className="card-footer bg-white border-0">
                <Link to={`/blogs/${blog.id}`} className="btn btn-sm btn-primary">
                    Read More
                </Link>
            </div>
        </div>
    );
}
