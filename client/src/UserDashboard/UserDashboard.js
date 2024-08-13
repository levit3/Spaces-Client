// src/UserDashboard.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserDashboard.css'; // Custom CSS for additional styling

const UserDashboard = () => {
  const [user, setUser ] = useState([])
  const [bookedSpaces, setBookedSpaces] = useState([])
  const [createdEvents, setCreatedEvents] = useState([])
  useEffect(() => {
    fetch('/api/users/7/')
      .then(response => response.json())
      .then(data => {setUser(data); setBookedSpaces(data.bookings); setCreatedEvents(data.events)})  
  },[])
  const { name, email, profilePicture } = user;
  const [selectedSection, setSelectedSection] = useState('events');




  return (
    <div className="container-fluid user-dashboard mt-5"> {/* Use container-fluid for full-width */}
      <div className="card bg-dark text-white mb-4 shadow-lg">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={profilePicture}
              alt={`${name}'s Profile`}
              className="profile-picture rounded-circle me-3"
            />
            <div>
              <h2 className="card-title mb-1">{name}</h2>
              <p className="card-text">{email}</p>
            </div>
          </div>
          <div>
            <button className="btn btn-warning ms-3 shadow-sm">Edit Profile</button>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-3">
          <button
            className={`btn w-100 py-3 shadow-sm ${
              selectedSection === 'spaces' ? 'btn-primary active' : 'btn-secondary'
            }`}
            onClick={() => setSelectedSection('spaces')}
          >
            View Booked Spaces
          </button>
        </div>
        <div className="col-md-6 mb-3">
          <button
            className={`btn w-100 py-3 shadow-sm ${
              selectedSection === 'events' ? 'btn-primary active' : 'btn-secondary'
            }`}
            onClick={() => setSelectedSection('events')}
          >
            View Created Events
          </button>
        </div>
      </div>

      {/* Dynamic Content Based on Selected Section */}
      <div className="section-content">
        {selectedSection === 'spaces' ? (
          <div className="spaces-list mt-4">
            <h4>Booked Spaces</h4>
            {bookedSpaces.length > 0 ? (
              <ul className="list-group">
                {bookedSpaces.map((booking, index) => (
                  <li key={index} className="list-group-item bg-dark text-white">
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
                  <li key={index} className="list-group-item bg-dark text-white">
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
