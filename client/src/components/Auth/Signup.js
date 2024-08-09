import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="auth-signup-container">
      <div className="auth-image-section">
        <button className="auth-signup-close-btn" onClick={handleClose}>
          ≪ Go Back
        </button>
        <img
          loading="lazy"
          srcSet="https://images.unsplash.com/photo-1533008093099-e2681382639a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlbGxuZXNzJTIwc3BhY2VzfGVufDB8fDB8fHww"
          className="object-contain grow w-full aspect-[0.76] max-md:mt-10 max-md:max-w-full"
          alt="Signup Img"
        />
      </div>

      <div className="auth-signup-form">
        <img src="logo1.png" alt="Logo" className="auth-logo" />
        <p className="auth-signup-text">Sign up to get started.</p>
        <input
          type="text"
          placeholder="Username"
          className="auth-signup-input"
        />
        <input type="email" placeholder="Email" className="auth-signup-input" />
        <input
          type="password"
          placeholder="Password"
          className="auth-signup-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="auth-signup-input"
        />

        <button className="auth-signup-btn">Create Account</button>

        <div className="auth-login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
