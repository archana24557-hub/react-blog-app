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
                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1542736667-069246bdbc6d"; }}
            />

            <div className="card-body">
                <h5>{blog.title}</h5>
                <p>{blog.description.slice(0, 80)}...</p>

                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/blogs/${blog.id}`} className="btn btn-primary">
                        Read More
                    </Link>
                    <div className="text-muted small">
                        <span className="me-2"><i className="bi bi-heart-fill text-danger"></i> {blog.likes || 0}</span>
                        <span><i className="bi bi-chat-fill text-primary"></i> {blog.comments ? blog.comments.length : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
