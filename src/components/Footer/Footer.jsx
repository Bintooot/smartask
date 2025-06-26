import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <section className="right-col">
          <h2>SmarTask</h2>
          <p>
            Built with 💻 by <i>Ben Raymond Aniasco</i> A personal portfolio
            project
          </p>
        </section>
        <section className="center-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Overview</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </section>
        <section className="left-col">
          <h3>Social & Contact</h3>
          <ul>
            <li>
              <a
                href="mailto:aniascoben@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ben-raymond-aniasco-381523334/"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Bintooot"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            </li>
            <li>
              <a
                href="https://aniascoben-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Portfolio site
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
