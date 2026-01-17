
import profilePic from "../assets/profile.jpg";


export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Passionate Developer & Tech Enthusiast</p>
      </div>

      <div className="about-content">
        <div className="profile-section">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-img"
          />
          <div className="bio">
            <h2>Who I Am</h2>
            <p>
              Hi! I'm a student passionate about building modern web applications.
              NEXORA is my playground where I share insights on technology, lifestyle,
              and personal growth. I love turning complex problems into beautiful,
              intuitive interfaces.
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h2>My Toolkit</h2>
          <div className="skills-grid">
            <div className="skill-card">⚛️ ReactJS</div>
            <div className="skill-card">🚀 JavaScript</div>
            <div className="skill-card">🎨 HTML & CSS</div>
            <div className="skill-card">📦 Node.js</div>
            <div className="skill-card">🐙 Git & GitHub</div>
            <div className="skill-card">💅 Tailwind</div>
          </div>
        </div>
      </div>
    </div>
  );
}


