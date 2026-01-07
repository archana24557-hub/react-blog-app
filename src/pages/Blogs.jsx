import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../utils/localStorage";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setBlogs(getBlogs());
    }, []);

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">All Blogs</h2>

            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search blog by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredBlogs.length === 0 ? (
                <p className="text-muted">No blogs available.</p>
            ) : (
                <div className="row">
                    {filteredBlogs.map((blog) => (
                        <div className="col-md-4 mb-4" key={blog.id}>
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
