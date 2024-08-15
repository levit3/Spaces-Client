// src/components/RoleRequestItem.js
import React from "react";
import styles from "./RoleRequestItem.module.css";

const RoleRequestItem = ({ request }) => {
  const handleApprove = () => {
    fetch(`http://127.0.0.1:5555/api/role-requests/${request.id}/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => alert("Failed to approve request"));
  };

  const handleReject = () => {
    fetch(`http://127.0.0.1:5555/api/role-requests/${request.id}/reject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => alert("Failed to reject request"));
  };

  return (
    <div className={styles.item}>
      <p>User: {request.user.email}</p>
      <p>Status: {request.status}</p>
      <div className={styles.actions}>
        <button onClick={handleApprove} className={styles.approveButton}>
          Approve
        </button>
        <button onClick={handleReject} className={styles.rejectButton}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default RoleRequestItem;
