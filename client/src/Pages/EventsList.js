import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/EventList.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const API = process.env.REACT_APP_SERVER_API;

function EventsList() {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(() => {
    const storedDate = localStorage.getItem("selectedDate");
    return storedDate ? new Date(storedDate) : new Date();
  });

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch(`${API}/api/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      filterEventsByDate();
    }
  }, [selectedDate, events]);

  const filterEventsByDate = () => {
    const filteredEvents = events.filter(
      (event) =>
        new Date(event.date).toLocaleDateString("en-US") ===
        new Date(selectedDate).toLocaleDateString("en-US")
    );
    setFilteredEvents(filteredEvents);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">Fetching</div>
      </div>
    );
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="events-container">
      <div className="back-button" onClick={handleGoBack}>
        <img
          src="https://img.icons8.com/?size=100&id=60636&format=png&color=FFFFFF"
          alt="Back"
          className="back-button-image"
        />
      </div>

      <header className="events-header">
        <h2 className="events-title">Upcoming Events</h2>
      </header>

      <section className="events-schedule">
        <div className="events-filter">
          <div className="date-picker">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="d MMMM, yyyy"
            />
          </div>
          <hr />
        </div>

        <div className="events-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-list-name">{event.space.title}</p>
                  <p className="event-list-location">{event.space.location}</p>
                  <Link
                    to={`/event/${event.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="event-learn-more">Learn more</p>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h3>No events found for the selected date.</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default EventsList;
