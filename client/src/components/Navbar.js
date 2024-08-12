import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuth();
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
  }, [isMenuOpen]);

  const handleProfile = () => {
    navigate("/profile");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`nav-navbar ${isScrolled ? "nav-navbar--scrolled" : ""}`}>
      {/* Navbar content */}
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
        <Link to="/space/:id">Spaces</Link>
        <Link to="/about">About Us</Link>

        <li className="nav-dropdown">
          Events
          <ul className="nav-dropdown-menu">
            <a href="/event">View All Events</a>
            <a href="/event">Upcoming Events</a>
            <Link to="/create-event">Create Event</Link>
          </ul>
        </li>
      </ul>

      <div className="nav-navbar__auth">
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
