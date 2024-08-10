import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="Logo"
          className="navbar__logo"
        />
      </div>
      <ul
        className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
      >
        <a href="#">Home</a>
        <a href="#">Spaces</a>
        <a href="#">About</a>

        <li className="dropdown">
          Events
          <ul className="dropdown-menu">
            <a href="#">View All Events</a>
            <a href="#">Upcoming Events</a>
            <a href="#">Create Event</a>
          </ul>
        </li>
      </ul>
      <div className="navbar__auth">
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
            <div className="navbar__profile" onClick={handleProfile}>
              <img
                src="path/to/avatar.jpg"
                alt="Profile Avatar"
                className="profile__avatar"
              />
            </div>
          </>
        )}
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
