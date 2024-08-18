import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ReviewCreation.css";
import Navbar from "./Navbar";
const API = process.env.REACT_APP_SERVER_API;

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

function ReviewCreation() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [redirectOnClose, setRedirectOnClose] = useState(false);
  const navigate = useNavigate();

  const images = {
    main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOZ0oz476tR-6pZvDjXgItGcLjanknAHIWA&s",
  };
  const user_id = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : null;

  useEffect(() => {
    if (user_id === null) {
      setModalMessage("Please log in to create a review");
      setIsModalOpen(true);
      setRedirectOnClose(true);
    } else {
      setLoading(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !comment || !date) {
      setModalMessage("All fields must be entered");
      setIsModalOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append("rating", rating);
    formData.append("comment", comment);
    formData.append("date", date);
    formData.append("space_id", id);
    formData.append("user_id", user_id);

    try {
      const response = await fetch(`${API}/api/reviews`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setModalMessage("Review created successfully!");
        setIsModalOpen(true);
        setRating(null);
        setComment("");
        setDate("");
      } else {
        const errorData = await response.json();
        console.error(`Failed to create review: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage(
        `Failed to create review: ${error.message || error.toString()}`
      );
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (redirectOnClose) {
      navigate("/login");
    }
  };

  if (!loading) {
    return (
      <div className="loading-container">
        <div className="spinner">Fetching</div>
      </div>
    );
  }

  return (
    <section className="main-content">
      <Navbar />
      <h1 className="title">Add Your Review</h1>
      <div className="review-creation-container">
        <div className="review-photo">
          <img src={images.main} alt="Event view" className="main-image" />
        </div>
        <form className="review-form" onSubmit={handleSubmit}>
          <label htmlFor="comment" className="form-label">
            Comment:
          </label>
          <input
            id="comment"
            className="form-input"
            type="text"
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <label htmlFor="rating" className="form-label">
            Rate:
          </label>
          <StarRating rating={rating} onRatingChange={setRating} />
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            id="date"
            className="form-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="submit-button"
            type="submit"
            value="Create Review"
          />
        </form>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          message={modalMessage}
        />
      </div>
    </section>
  );
}

export default ReviewCreation;
