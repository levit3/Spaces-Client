import React, { useState, useEffect } from "react";
import "./EventCreation.css";
import { useNavigate } from "react-router-dom";
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

function EventCreation() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [spaceId, setSpaceId] = useState("");
  const [bookedSpaces, setBookedSpaces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [redirectOnClose, setRedirectOnClose] = useState(false);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const images = {
    main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjcsyLgOPmDPJOSVNXpaxCQlnPVLaQeHx4A&s",
  };

  const user_i_d = localStorage.getItem("user_id");
  console.log(user_i_d);

  useEffect(() => {
    if (!user_i_d) {
      setModalMessage("Please log in to create an event");
      setIsModalOpen(true);
      setRedirectOnClose(true);
    }
  }, [user_i_d]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${API}/api/bookings`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const bookings = await response.json();

        const userBookings = bookings.filter(
          (booking) => booking.user_id == user_i_d
        );
        const uniqueSpacesMap = new Map();

        userBookings.forEach((booking) => {
          const spaceId = booking.space_id;
          const spaceTitle = booking.space.title;

          if (!uniqueSpacesMap.has(spaceId)) {
            uniqueSpacesMap.set(spaceId, spaceTitle);
          }
        });

        const spaces = Array.from(uniqueSpacesMap, ([id, title]) => ({
          id,
          title,
        }));
        console.log(spaces);

        setBookedSpaces(spaces);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    if (user_i_d) {
      fetchBookings();
    }
  }, [user_i_d]);

  useEffect(() => {
    if (loading && bookedSpaces.length === 0) {
      setModalMessage(
        "You have no booked spaces. Please book a space to create an event"
      );
      setIsModalOpen(true);
      setRedirectOnClose(true);
    }
  }, [loading, bookedSpaces]);

  const handleSelectChange = (e) => {
    const selectedSpaceId = e.target.value;
    setSpaceId(selectedSpaceId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !date || !spaceId) {
      setModalMessage("All fields must be entered");
      setIsModalOpen(true);
      return;
    }

    const event = {
      title,
      description,
      date,
      space_id: spaceId,
      organizer_id: user_i_d,
      image_url: image,
    };

    try {
      const response = await fetch(`${API}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        setModalMessage("Event created successfully!");
        setIsModalOpen(true);
        setRedirectOnClose(true); // Redirect to home or event details after success
        setTitle("");
        setDescription("");
        setSpaceId("");
        setDate("");
      } else {
        const errorData = await response.json();
        setModalMessage(`Failed to create event: ${errorData.error}`);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage(
        `Failed to create event: ${error.message || error.toString()}`
      );
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (redirectOnClose) {
      navigate("/"); // Redirect to home or a specific page
    }
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
      <Navbar />
      <h1 className="title">Create Your Event</h1>
      <div className="event-creation-container">
        <div className="image-container">
          <img src={images.main} alt="Event view" className="main-image" />
        </div>
        <form className="event-form" onSubmit={handleSubmit}>
          <label htmlFor="title" className="form-label">
            Event Name:
          </label>
          <input
            id="title"
            className="form-input"
            type="text"
            placeholder="Event Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description" className="form-label">
            Event Description:
          </label>
          <input
            id="description"
            className="form-input"
            type="text"
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="spaceId" className="form-label">
            Event Location:
          </label>
          <select
            id="spaceId"
            className="form-input"
            value={spaceId}
            onChange={handleSelectChange}
          >
            <option value="">Select Location</option>
            {bookedSpaces.map((space) => (
              <option
                key={space.id}
                value={space.id}
                style={{ color: "white" }}
              >
                {space.title}
              </option>
            ))}
          </select>
          <label htmlFor="date" className="form-label">
            Event Date:
          </label>
          <input
            id="date"
            className="form-input"
            type="date"
            placeholder="dd/mm/yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="date" className="form-label">
            Image URL
          </label>
          <input
            id="image_url"
            className="form-input"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input className="submit-button" type="submit" value="Create Event" />
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

export default EventCreation;
