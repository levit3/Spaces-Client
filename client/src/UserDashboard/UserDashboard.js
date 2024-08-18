// src/UserDashboard.js

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserDashboard.css"; // Custom CSS for additional styling
const API = process.env.REACT_APP_SERVER_API;

const UserDashboard = () => {
  const [user, setUser] = useState([]);
  const [bookedSpaces, setBookedSpaces] = useState([]);
  const [createdEvents, setCreatedEvents] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const [loading, setLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState("events");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  );

  useEffect(() => {
    if (user_id !== undefined) {
      console.log("done");
      fetch(`${API}/api/users/${user_id}/`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setName(data.name);
          setEmail(data.email);
          setProfilePicture(data.profile_picture);
          setBookedSpaces(data.bookings);
          setCreatedEvents(data.events);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">Fetching</div>
      </div>
    );
  }

  return (
    <div className="container-fluid user-dashboard mt-5">
      {" "}
      <div className="card bg-dark  text-white mb-4 shadow-lg mx-5">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt={`${name}'s Profile`}
              className="profile-picture rounded-circle me-3"
            />
            <div>
              <h2 className="card-title mb-1">{name}</h2>
              <p className="card-text">{email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <button
            className={`btn custom-btn py-3 shadow-sm ${
              selectedSection === "spaces"
                ? "btn-primary active"
                : "btn-secondary"
            }`}
            onClick={() => setSelectedSection("spaces")}
          >
            View Booked Spaces
          </button>
        </div>
        <div className="col-md-4 mb-3">
          <button
            className={`btn custom-btn py-3 shadow-sm ${
              selectedSection === "events"
                ? "btn-primary active"
                : "btn-secondary"
            }`}
            onClick={() => setSelectedSection("events")}
          >
            View Created Events
          </button>
        </div>
      </div>
      <div className="section-content">
        {selectedSection === "spaces" ? (
          <div className="spaces-list mt-4">
            <h4>Booked Spaces</h4>
            {bookedSpaces.length > 0 ? (
              <ul className="list-group">
                {bookedSpaces.map((booking, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-dark text-white"
                  >
                    <strong>{booking.space.title}</strong>
                    <p>{booking.space.description}</p>
                    <small>Location: {booking.space.location}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No booked spaces available.</p>
            )}
          </div>
        ) : (
          <div className="events-list mt-4">
            <h4>Created Events</h4>
            {createdEvents.length > 0 ? (
              <ul className="list-group">
                {createdEvents.map((event, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-dark text-white"
                  >
                    <strong>{event.title}</strong>
                    <p>{event.description}</p>
                    <small>Date: {event.date}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events created yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
