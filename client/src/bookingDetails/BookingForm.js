import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";
const API = process.env.REACT_APP_SERVER_API;

function BookingForm({ id, price_per_hour }) {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [hours, setHours] = useState(1);
  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const pricePerHour = price_per_hour;
  const user_id = localStorage.getItem("user_id");
  console.log(user_id);
  const space_id = id;

  const navigate = useNavigate();

  // Calculate end time
  const calculateEndTime = () => {
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + parseInt(hours));
    return endTime;
  };

  // Calculate end date
  const calculateEndDate = () => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + parseInt(days) - 1);
    return endDate;
  };

  // Update total price whenever hours or days change
  useEffect(() => {
    setTotalPrice(hours * days * pricePerHour);
  }, [hours, days]);

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const handleBooking = () => {
    if (!user_id) {
      navigate("/login");
    }
    const bookingData = {
      start_date: startDate,
      end_date: calculateEndDate(),
      space_id,
      user_id,
      total_price: totalPrice,
    };

    fetch(`${API}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.id) {
          navigate("/checkout", {
            state: data,
          });
        } else {
          console.error("Booking failed, no ID returned");
        }
      })
      .catch((error) => {
        console.error("Error booking space:", error);
      });
  };

  return (
    <div className="booking-form">
      <h3>Book this space</h3>
      <div className="form-group">
        <label htmlFor="start-date">Choose your start date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
          className="form-control"
          id="start-date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="start-time">Choose your start time:</label>
        <DatePicker
          selected={startTime}
          onChange={(time) => setStartTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Start Time"
          dateFormat="h:mm aa"
          className="form-control"
          id="start-time"
        />
      </div>
      <div className="form-group">
        <label htmlFor="hours">Select duration (hours per day):</label>
        <select
          id="hours"
          className="form-control"
          value={hours}
          onChange={handleHoursChange}
        >
          {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
            <option key={hour} value={hour}>
              {hour} hour{hour > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="days">Select number of days:</label>
        <select
          id="days"
          className="form-control"
          value={days}
          onChange={handleDaysChange}
        >
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day} day{day > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <p>End Date: {calculateEndDate().toLocaleDateString()}</p>
        <p>
          End Time:{" "}
          {calculateEndTime().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleBooking}>
        Book Now
      </button>
      <p className="price-per-hour mt-2">Price per hour: ${pricePerHour}</p>
      <p className="total-price mt-2">Total Price: ${totalPrice}</p>
    </div>
  );
}

export default BookingForm;
