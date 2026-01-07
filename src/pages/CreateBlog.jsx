import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/localStorage";

export default function CreateBlog() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Tech");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !content) {
            alert("Please fill all fields");
            return;
        }

        const blogs = getBlogs();
        const newBlog = {
            id: Date.now(),
            title,
            description,
            content,
            category,
            author: "Sumit",
            date: new Date().toISOString().slice(0, 10),
        };

        saveBlogs([...blogs, newBlog]);
        navigate("/blogs");
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Create Blog</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-3"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Short Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select
                    className="form-select mb-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Tech</option>
                    <option>Education</option>
                    <option>Lifestyle</option>
                </select>

                <textarea
                    className="form-control mb-3"
                    rows="5"
                    placeholder="Blog Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button className="btn btn-primary">Publish Blog</button>
            </form>
        </div>
    );
}
