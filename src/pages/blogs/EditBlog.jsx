import "../../App.css";

const blogs = [
    {
        id: 1,
        title: "Future of AI",
        desc: "How artificial intelligence is changing our daily life.",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    },
    {
        id: 2,
        title: "Healthy Lifestyle",
        desc: "Simple habits for a better and healthier life.",
        img: "https://images.unsplash.com/photo-1540206395-68808572332f",
    },
    {
        id: 3,
        title: "Web Development",
        desc: "Modern tools and trends for building websites.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
];

export default function Home() {
    return (
        <>
            <div className="hero glass">
                <h1>NEXORA</h1>
                <p>Where Thoughts Meet Technology</p>
                <button>Explore Blogs</button>
            </div>

            <div className="category-bar">
                <span>#Tech</span>
                <span>#Lifestyle</span>
                <span>#Personal</span>
                <span>#Growth</span>
            </div>

            <div className="blog-grid">
                {blogs.map(blog => (
                    <div key={blog.id} className="glass blog-card">
                        <img src={blog.img} alt={blog.title} />
                        <h3>{blog.title}</h3>
                        <p>{blog.desc}</p>
                    </div>
                ))}
            </div>

            <div className="footer">
                © 2026 NEXORA — Designed by You
            </div>
        </>
    );
}

