import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogs, saveBlogs } from "../utils/localStorage";

export default function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Tech");

    useEffect(() => {
        const blog = getBlogs().find(b => b.id === Number(id));
        if (!blog) {
            navigate("/blogs");
            return;
        }
        setTitle(blog.title);
        setDescription(blog.description);
        setContent(blog.content);
        setCategory(blog.category);
    }, [id, navigate]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedBlogs = getBlogs().map(b =>
            b.id === Number(id)
                ? { ...b, title, description, content, category }
                : b
        );

        saveBlogs(updatedBlogs);
        navigate(`/blogs/${id}`);
    };

    const handleDelete = () => {
        if (window.confirm("Delete this blog?")) {
            saveBlogs(getBlogs().filter(b => b.id !== Number(id)));
            navigate("/blogs");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Edit Blog</h2>

            <form onSubmit={handleUpdate}>
                <input className="form-control mb-3" value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <input className="form-control mb-3" value={description}
                    onChange={(e) => setDescription(e.target.value)} />

                <select className="form-select mb-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option>Tech</option>
                    <option>Education</option>
                    <option>Lifestyle</option>
                </select>

                <textarea className="form-control mb-3" rows="5"
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />

                <button className="btn btn-success me-2">Update</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </form>
        </div>
    );
}
