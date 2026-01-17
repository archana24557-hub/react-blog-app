import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogs, updateBlog } from "../../utils/localStorage";

export default function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("Tech");

    useEffect(() => {
        const blogs = getBlogs();
        const blog = blogs.find((b) => b.id === Number(id));

        if (blog) {
            setTitle(blog.title);
            setDescription(blog.description);
            setContent(blog.content || "");
            setImage(blog.image || "");
            setCategory(blog.category);
        } else {
            alert("Blog not found!");
            navigate("/blogs");
        }
    }, [id, navigate]);

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and Description are required");
            return;
        }

        updateBlog(id, {
            title,
            description,
            content,
            image,
            category
        });

        alert("Blog updated successfully!");
        navigate(`/blogs/${id}`);
    };

    return (
        <div className="container mt-4 mb-5">
            <h2 className="mb-4">Edit Blog</h2>

            <form onSubmit={handleUpdate} className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Blog Title</label>
                    <input
                        className="form-control"
                        placeholder="Blog Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Short Description</label>
                    <input
                        className="form-control"
                        placeholder="Short Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        className="form-control"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>Tech</option>
                        <option>Education</option>
                        <option>Lifestyle</option>
                        <option>Vlog</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Full Blog Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success">Save Changes</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate(`/blogs/${id}`)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
