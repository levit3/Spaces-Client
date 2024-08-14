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

  function ReviewCreation() {
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState("");
    const { id } = useParams();
    const [user, setUser] = useState("");
    const [date, setDate] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalMessage, setModalMessage] = useState("");
  
    const images = {
       main: "data:image/jpeg;base64,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"  
      };
//   useEffect(() => {
//     fetch("/api/checksession")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           console.error("Error fetching user:", data.error);
//         } else {
//           setUser(data);
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user:", error);
//         setLoading(false);
//       });
//   }, []); 

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
    formData.append("user_id", user.id);
  
    try {
      const response = await fetch("/api/reviews", {
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
      setModalMessage(`Failed to create review: ${error.message || error.toString()}`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!loading) {
    return (
      <div className="loading-container">
        <img
          className="loading"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
          alt="Loading..."
        />
      </div>
    );
  }

  return (
    <section className="main-content">
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
          <input className="submit-button" type="submit" value="Create Review" />
        </form>
        <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
      </div>
    </section>
  );    
    }

export default ReviewCreation;
