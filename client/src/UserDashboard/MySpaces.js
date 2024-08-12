import React, { useEffect, useState } from 'react';
import './MySpaces.css';

const MySpaces = () => {
  const [bookedSpaces, setBookedSpaces] = useState([]);

  useEffect(() => {
    const fetchBookedSpaces = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/api/users/2/');
        if (response.ok) {
          const data = await response.json();
          setBookedSpaces(data.bookings);
        } else {
          console.error('Failed to fetch booked spaces');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBookedSpaces();
  }, []);

  return (
    <div className="dashboard-card p-3 shadow-sm">
      <h4 className="dashboard-title mb-2">My Spaces</h4>
      <div className="space-list">
        {bookedSpaces.length > 0 ? (
          bookedSpaces.map(booking => (
            <div key={booking.id} className="space-item mb-3">
              <div className="space-container">
                <img src={booking.space.imageUrl} alt={booking.space.title} className="space-image mb-2" />
                <div className="space-details">
                  <h5>{booking.space.title}</h5>
                  <p>{booking.space.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No booked spaces available</p>
        )}
      </div>
    </div>
  );
};

export default MySpaces;




