import { useState } from "react";
import { getBlogs } from "../utils/localStorage";

export default function Home() {
    const allBlogs = getBlogs();
    const [category, setCategory] = useState("ALL");

    const filteredBlogs =
        category === "ALL"
            ? allBlogs
            : allBlogs.filter((b) => b.category === category);

    return (
        <div className="container">
            <div className="hero">
                <h1>Welcome to BrainBloom 🧠</h1>
                <p>Explore Tech, Personal & Lifestyle blogs</p>
            </div>

            <div className="category-bar">
                {["ALL", "TECH", "PERSONAL", "LIFESTYLE"].map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${category === cat ? "active" : ""}`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {filteredBlogs.map((blog) => (
                <div className="blog-card" key={blog.id}>
                    <img src={blog.image} alt={blog.title} />

                    <div className="blog-content">
                        <span className="blog-tag">{blog.category}</span>

                        <h3 className="blog-title">{blog.title}</h3>

                        <p className="blog-desc">{blog.description}</p>

                        <p className="blog-date">{blog.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
