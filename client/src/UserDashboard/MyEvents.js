import React, { useEffect, useState } from 'react';
import './MyEvents.css';

const MyEvents = () => {
  const [createdEvents, setCreatedEvents] = useState([]);

  useEffect(() => {
    const fetchCreatedEvents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/api/users/2/');
        if (response.ok) {
          const data = await response.json();
          setCreatedEvents(data.events);
        } else {
          console.error('Failed to fetch created events');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCreatedEvents();
  }, []);

  return (
    <div className="dashboard-card p-3 shadow-sm">
      <h4 className="dashboard-title mb-2">My Events</h4>
      <div className="event-list">
        {createdEvents.length > 0 ? (
          createdEvents.map(event => (
            <div key={event.id} className="event-item mb-3">
              <div className="event-container">
                <h5>{event.name}</h5>
                <p>{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events created</p>
        )}
      </div>
    </div>
  );
};

export default MyEvents;

