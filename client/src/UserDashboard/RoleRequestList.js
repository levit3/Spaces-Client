// src/components/RoleRequestList.js
import React from "react";
import RoleRequestItem from "./RoleRequestItem";
import styles from "./RoleRequestList.module.css";

const RoleRequestList = ({ requests }) => {
  return (
    <div className={styles.listContainer}>
      <h2>Pending Tenant Role Requests</h2>
      {requests.length > 0 ? (
        requests.map((request) => (
          <RoleRequestItem key={request.id} request={request} />
        ))
      ) : (
        <p>No pending requests</p>
      )}
    </div>
  );
};

export default RoleRequestList;
