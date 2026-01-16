export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>NEXORA</h3>
                    <p>
                        Where Thoughts Meet Technology. Explore the latest trends in Tech,
                        Lifestyle, and Personal Growth.
                    </p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/blogs">Blogs</a></li>
                        <li><a href="#/about">About</a></li>
                        <li><a href="#/create">Write a Blog</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Stay Connected</h3>
                    <div className="social-links">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2026 NEXORA | Designed with ❤️ by TechGlaz Lab
            </div>
        </footer>
    );
}
