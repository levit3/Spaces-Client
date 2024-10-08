import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Auth.css";
const API = process.env.REACT_APP_SERVER_API;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  if (isLoggedIn) {
    navigate("/");
    return null;
  }

  const authenticatedFetch = async (url, options = {}) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Request failed: ${response.status} ${errorMessage}`);
      }

      return response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authenticatedFetch(`${API}/api/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("user_id", response.user.id);
      login(response.token);
      navigate("/");
    } catch (error) {
      setError(error.message || "Login failed");
    }
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
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
