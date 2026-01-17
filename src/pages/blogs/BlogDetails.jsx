import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogs, updateBlog, deleteBlog } from "../../utils/localStorage";

export default function BlogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        const blogs = getBlogs();
        const foundBlog = blogs.find(b => b.id === Number(id));
        setBlog(foundBlog);
    }, [id]);

    const handleLike = () => {
        if (blog) {
            const updatedBlog = updateBlog(blog.id, { likes: (blog.likes || 0) + 1 });
            setBlog(updatedBlog);
        }
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            deleteBlog(blog.id);
            navigate("/blogs");
        }
    };

    const handleComment = (e) => {
        e.preventDefault();
        if (blog && commentText.trim()) {
            const newComment = {
                id: Date.now(),
                text: commentText,
                date: new Date().toLocaleDateString()
            };
            const updatedBlog = updateBlog(blog.id, {
                comments: [...(blog.comments || []), newComment]
            });
            setBlog(updatedBlog);
            setCommentText("");
        }
    };

    if (!blog) return <h2 className="text-center mt-5">Blog not found</h2>;

    return (
        <div className="container mt-4 mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1 className="mb-0">{blog.title}</h1>
                        <div className="d-flex gap-2">
                            <Link to={`/edit/${blog.id}`} className="btn btn-warning btn-sm">Edit</Link>
                            <button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>

                    {blog.images && blog.images.length > 0 ? (
                        <div className="row mb-4">
                            {blog.images.map((img, index) => (
                                <div key={index} className="col-md-6 mb-3">
                                    <img
                                        src={img}
                                        alt={`${blog.title} ${index + 1}`}
                                        className="img-fluid rounded w-100 shadow-sm"
                                        style={{ height: "250px", objectFit: "cover" }}
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1542736667-069246bdbc6d"; }}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <img
                            src={blog.image || "https://images.unsplash.com/photo-1542736667-069246bdbc6d"}
                            alt={blog.title}
                            className="img-fluid rounded mb-4 w-100 shadow"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1542736667-069246bdbc6d"; }}
                        />
                    )}

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="text-muted">Category: <span className="badge bg-secondary">{blog.category}</span></span>
                        <button
                            onClick={handleLike}
                            className="btn btn-outline-danger d-flex align-items-center gap-2"
                        >
                            <i className="bi bi-heart-fill"></i>
                            Like <span className="badge bg-danger">{blog.likes || 0}</span>
                        </button>
                    </div>

                    <p className="lead" style={{ whiteSpace: "pre-line" }}>{blog.description}</p>
                    {blog.content && <p className="mt-4">{blog.content}</p>}

                    <hr className="my-5" />

                    <h3>Comments ({blog.comments ? blog.comments.length : 0})</h3>

                    <ul className="list-group list-group-flush mb-4">
                        {blog.comments && blog.comments.map(comment => (
                            <li key={comment.id} className="list-group-item">
                                <p className="mb-1">{comment.text}</p>
                                <small className="text-muted">{comment.date}</small>
                            </li>
                        ))}
                        {(!blog.comments || blog.comments.length === 0) && (
                            <li className="list-group-item text-muted">No comments yet. Be the first to share your thoughts!</li>
                        )}
                    </ul>

                    <form onSubmit={handleComment} className="card p-3 shadow-sm">
                        <div className="mb-3">
                            <label htmlFor="comment" className="form-label">Leave a Comment</label>
                            <textarea
                                id="comment"
                                className="form-control"
                                rows="3"
                                placeholder="Write your comment here..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Post Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
