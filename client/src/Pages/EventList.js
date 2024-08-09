import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventList() {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        filterEventsByDate();
        setLoading(false);
      });
  }, [selectedDate]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="events-container">
      <header className="events-header">
        <h2 className="events-title">Upcoming Events</h2>
      </header>

      <section className="events-schedule">
        <div className="events-filter">
          <hr />
        </div>

        <div className="events-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-content">
                  {/* <p className="event-link">
                  <time className="event-time">{event.time}</time>
                </p> */}
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

export default EventList;
