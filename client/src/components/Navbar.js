import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth/AuthContext";
import { ThemeContext } from "./ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { isLoggedIn, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open", !isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <nav
      className={`nav-navbar ${isScrolled ? "nav-navbar--scrolled" : ""} ${
        isDarkMode ? "nav-navbar--dark" : ""
      }`}
    >
      <div className="nav-navbar__brand">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="Logo"
          className="nav-navbar__logo"
        />
      </div>

      <ul
        className={`nav-navbar__links ${
          isMenuOpen ? "nav-navbar__links--open" : ""
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/spaces">Spaces</Link>
        <Link to="/about">About Us</Link>

        <li className="nav-dropdown">
          Events
          <ul className="nav-dropdown-menu">
            <a href="#">View All Events</a>
            <a href="#">Upcoming Events</a>
            <a href="#">Create Event</a>
          </ul>
        </li>
      </ul>

      <div className="nav-navbar__auth">
        <button onClick={toggleTheme} className="nav-navbar__theme-toggle">
          <span className="nav-navbar__theme-toggle-icon">
            {isDarkMode ? "☀️" : "🌙"}
          </span>
          <span className="nav-navbar__theme-toggle-text">
            {isDarkMode ? "Light" : "Night"}
          </span>
        </button>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/signup" className="signup">
              Signup
            </Link>
          </>
        ) : (
          <>
            <button onClick={logout} className="logout">
              Logout
            </button>
            <div className="nav-navbar__profile" onClick={handleProfile}>
              <img
                src="path/to/avatar.jpg"
                alt="Profile Avatar"
                className="nav-profile__avatar"
              />
            </div>
          </>
        )}
      </div>
      <div className="nav-navbar__hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
