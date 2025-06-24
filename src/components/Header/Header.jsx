import React from "react";
import "./Header.css";

const navlink = ["Home", "Overview", "About", "Contact"];

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="header-heading">
          <h1 className="title">SmarTask</h1>
          <nav className="header-navlink">
            <ul>
              {navlink.map((items) => (
                <li>
                  <a href="#">{items}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="nav-link-wrapper">
          <a href="#">Github</a>
          <a
            href="https://aniascoben-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
