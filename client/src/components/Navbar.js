import React, { useState } from "react";
import "./Homepage.css";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">SPACES</div>
      <ul
        className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
      >
        <li>Home</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="navbar__auth">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
        <div className="navbar__profile">
          <img
            src="path/to/avatar.jpg"
            alt="User Avatar"
            className="profile__avatar"
            onClick={toggleProfileMenu}
          />
          {isProfileOpen && (
            <div className="profile__menu">
              <a href="/profile">Profile</a>
              <a href="/settings">Settings</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
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
