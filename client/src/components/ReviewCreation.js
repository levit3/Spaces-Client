import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ReviewCreation.css";

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const StarRating = ({ rating, onRatingChange }) => {
    const handleClick = (value) => {
      onRatingChange(value);
    };
  
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? "filled" : ""}`}
            onClick={() => handleClick(value)}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };
  
