import React, { useState, useEffect } from "react";
import "./EventCreation.css";
import { useNavigate } from "react-router-dom";


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
  const [user, setUser] = useState(null);
  const [bookedSpaces, setBookedSpaces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [redirectOnClose, setRedirectOnClose] = useState(false); // New state for redirect
  const navigate = useNavigate();

  const images = {
    main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjcsyLgOPmDPJOSVNXpaxCQlnPVLaQeHx4A&s",
  };

  useEffect(() => {
    fetch("/api/checksession")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error("Error fetching user:", data.error);
        } else {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
    })
    
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const bookings = await response.json();
        const userBookings = bookings.filter(
          (booking) => booking.user_id === user.id
        );
        console.log(userBookings);

        const uniqueSpacesMap = new Map();
        userBookings.forEach((booking) => {
          if (!uniqueSpacesMap.has(booking.space_id)) {
            uniqueSpacesMap.set(booking.space_id, booking.space_title);
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
    fetchBookings();
  }, [user]);

  useEffect(() => {
    if (loading && bookedSpaces.length === 0) {
      setModalMessage('You have no booked spaces. Please book a space to create an event');
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
    console.log("Submitting event with date:", date);
    const event = {
      title,
      description,
      date,
      space_id: spaceId,
      organizer_id: user.id,
    };

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        setModalMessage("Event created successfully!");
        setIsModalOpen(true);
        console.log("Event created successfully");
        setTitle("");
        setDescription("");
        setSpaceId("");
        setDate("");
      } else {
        const errorData = await response.json();
        console.error(`Failed to create event: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage(`Failed to create event: ${error.message || error.toString()}`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (redirectOnClose) {
      navigate('/'); 
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
              <option key={space.id} value={space.id}>
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
