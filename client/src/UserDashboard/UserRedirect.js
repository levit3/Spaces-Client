// src/components/UserDashboard.js
import React, { useEffect, useState } from "react";
import styles from "./UserDashboard.module.css";

// import AdminDashboard from "./AdminDashboard";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
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
      .then((data) => {
        setRequestStatus(data.message);
        setNotification({
          type: "success",
          message: "Request sent successfully! Please check your email.",
        });
      })
      .catch((error) =>
        setRequestStatus(`Failed to send request: ${error.message}`)
      );
  };

  return (
    <>
      {/* <AdminDashboard /> */}
      <div className={styles.container}>
        {error && <div className={styles.error}>Error: {error}</div>}
        {user && (
          <div className={styles.card}>
            <h1>
              Hello {user.name}, If you're interested in becoming a tenant you
              can request a tenant role. Once your request is approved, your
              role will be upgraded allowing you to manage your spaces and
              access tenant-specific features.
            </h1>
            <p>Email: {user.email}</p>

            {user.role === "user" && (
              <>
                <p>
                  If you're interested in becoming a tenant and gaining access
                  to more features, you can request a tenant role. Once your
                  request is approved, your role will be upgraded, allowing you
                  to manage your spaces and access tenant-specific features.
                </p>
                <button
                  onClick={handleRequestTenantRole}
                  className={styles.button}
                >
                  Request Tenant Role
                </button>
              </>
            )}
            {requestStatus && <p>{requestStatus}</p>}
          </div>
        )}
        {notification && (
          <div
            className={`${styles.notification} ${
              notification.type === "success" ? styles.success : styles.error
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    </>
  );
};
export default UserDashboard;
