export default function BlogCard({ blog }) {
    return (
        <div className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <span className="category">{blog.category}</span>

            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <small>{blog.date}</small>
        </div>
    );
}

