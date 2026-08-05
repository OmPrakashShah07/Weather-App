import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [menuOpen]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          id="menu-toggle"
          aria-label="Toggle navigation"
          role="button"
          tabIndex="0"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-cloud-sun brand-icon" aria-hidden="true"></i>
          <span className="brand-name">Weather</span>
        </Link>

        <nav className={`main-nav${menuOpen ? " active" : ""}`}>
          <ul>
            <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="12" y1="2" x2="12" y2="5"></line>
              <line x1="12" y1="19" x2="12" y2="22"></line>
              <line x1="2" y1="12" x2="5" y2="12"></line>
              <line x1="19" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="4.93" x2="7.04" y2="7.04"></line>
              <line x1="16.97" y1="16.97" x2="19.07" y2="19.07"></line>
              <line x1="4.93" y1="19.07" x2="7.04" y2="16.97"></line>
              <line x1="16.97" y1="7.04" x2="19.07" y2="4.93"></line>
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar
