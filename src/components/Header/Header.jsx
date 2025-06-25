import React from "react";
import "./Header.css";
import { Github, CircleUser } from "lucide-react";

const navlink = [
  {
    id: "1",
    label: "Home",
    href: "#",
    title: "home",
  },
  {
    id: "2",
    label: "Overview",
    href: "#",
    title: "overview",
  },
  {
    id: "3",
    label: "About",
    href: "#",
    title: "about",
  },
  {
    id: "4",
    label: "Contact",
    href: "#",
    title: "contact",
  },
];

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="header-heading">
          <h1 className="title">SmarTask</h1>
          <nav className="header-navlink">
            <ul>
              {navlink.map((items) => (
                <li key={items.id}>
                  <a href={items.href} title={items.title}>
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="nav-link-wrapper">
          <a
            title="github repository"
            href="https://github.com/Bintooot/smartask"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            title="developer"
            href="https://aniascoben-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CircleUser size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
