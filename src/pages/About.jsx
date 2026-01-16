

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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
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


