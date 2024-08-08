import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="auth-login-container">
      <div className="auth-login-form">
        <div>
          <button className="auth-close-btn" onClick={handleClose}>
            ≪ Go Back
          </button>
          <img
            src={process.env.PUBLIC_URL + "/logo1.png"}
            alt="Logo"
            className="auth-logo"
          />
        </div>
        <div className="auth-signup-link">
          Don't have an account? <Link to="/signup">Sign up!</Link>
        </div>
        <h1 className="auth-welcome-text">Welcome Back</h1>
        <form className="" onSubmit={handleSubmit}>
          <input
            className="auth-login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="auth-login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="auth-remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#">Recover Password</a>
          </div>
          <button type="submit" className="auth-login-btn">
            Log In
          </button>
        </form>
      </div>
      <div className="auth-image-section">
        <img
          src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D"
          alt="Office"
        />
      </div>
    </div>
  );
};

export default Login;
