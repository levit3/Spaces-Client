import React from "react";
import "./Homepage.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">SPACES</div>
      <ul className="navbar__links">
        <li>Home</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="navbar__auth">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
