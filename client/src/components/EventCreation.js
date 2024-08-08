import React, { useState, useEffect } from 'react';
import './EventCreation.css';

function EventCreation() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [spaceId, setSpaceId] = useState('');
  const [user, setUser] = useState(null);
  const [bookedSpaces, setBookedSpaces] = useState([]);

  const images = {
    main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjcsyLgOPmDPJOSVNXpaxCQlnPVLaQeHx4A&s"  };

  useEffect(() => {
    fetch("http://localhost:5555/api/users/92")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);
}

useEffect(() => {
  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5555/api/bookings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const bookings = await response.json();
      const userBookings = bookings.filter(booking => booking.user_id === 92);
      console.log(userBookings);

      const uniqueSpacesMap = new Map();
      userBookings.forEach(booking => {
        if (!uniqueSpacesMap.has(booking.space_id)) {
          uniqueSpacesMap.set(booking.space_id, booking.space_title);
        }
      });

      const spaces = Array.from(uniqueSpacesMap, ([id, title]) => ({
        id,
        title
      }));

      console.log(spaces);
      setBookedSpaces(spaces);
      setLoading(true)
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };
  fetchBookings();
}, [user]);

export default EventCreation;