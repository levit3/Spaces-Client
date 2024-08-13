import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "./AuthContext";
import "./Auth.css";

const authenticatedFetch = async (url, options = {}) => {
  const setNotification = options.setNotification;
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
      const errorData = await response.json();
      console.error("Response status:", response.status);
      console.error("Response body:", errorData);
      setNotification(errorData.message || "Request failed");
      throw new Error(errorData.message || "Request failed");
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("This field is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await authenticatedFetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });

      login(response.token);
      localStorage.setItem("user_id", response.user.id);
      localStorage.setItem("token", response.token);

      navigate("/");
    } catch (error) {
      setErrors({ general: error.message || "Signup failed" });
    } finally {
      setSubmitting(false);
    }
  };

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
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="auth-error-message">
                <ErrorMessage
                  name="general"
                  component="p"
                  style={{ color: "red" }}
                />
              </div>
              <div className="auth-error-message">
                <ErrorMessage
                  name="name"
                  component="p"
                  style={{ color: "red" }}
                />
              </div>
              <Field
                className="auth-signup-input"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <div className="auth-error-message">
                <ErrorMessage
                  name="email"
                  component="p"
                  style={{ color: "red" }}
                />
              </div>
              <Field
                className="auth-signup-input"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <div className="auth-error-message">
                <ErrorMessage
                  name="password"
                  component="p"
                  style={{ color: "red" }}
                />
              </div>
              <Field
                className="auth-signup-input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <div className="auth-error-message">
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  style={{ color: "red" }}
                />
              </div>
              <Field
                className="auth-signup-input"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <button
                type="submit"
                className="auth-signup-btn"
                disabled={isSubmitting}
              >
                Create Account
              </button>
            </Form>
          )}
        </Formik>
        <div className="auth-login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
