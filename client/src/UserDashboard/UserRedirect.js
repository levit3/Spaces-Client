// src/components/UserDashboard.js
import React, { useEffect, useState } from "react";
import styles from "./UserDashboard.module.css";
import AdminDashboard from "./AdminDashboard";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const userJson = JSON.parse(userData);
        setUser(userJson);
      } catch (error) {
        setError("Failed to parse user data from localStorage");
        console.error("Error parsing user data from localStorage:", error);
      }
    } else {
      setError("No user data found in localStorage");
    }
  }, []);

  const handleRequestTenantRole = () => {
    fetch("http://127.0.0.1:5555/api/request-tenant-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send request");
        }
        return response.json();
      })
      .then((data) => setRequestStatus(data.message))
      .catch((error) =>
        setRequestStatus(`Failed to send request: ${error.message}`)
      );
  };

  return (
    <>
      <AdminDashboard />
      <div className={styles.container}>
        {error && <div className={styles.error}>Error: {error}</div>}
        {user && (
          <div className={styles.card}>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>

            {user.role === "user" && (
              <button
                onClick={handleRequestTenantRole}
                className={styles.button}
              >
                Request Tenant Role
              </button>
            )}

            {requestStatus && <p>{requestStatus}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default UserDashboard;
