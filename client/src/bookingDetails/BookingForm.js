import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";

function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [hours, setHours] = useState(1);
  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const pricePerHour = 50; // Example price per hour

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
    // Navigate to the payment details page with the necessary booking data
    navigate("/payment-details", {
      state: {
        startDate,
        startTime,
        hours,
        days,
        endDate: calculateEndDate(),
        endTime: calculateEndTime(),
        pricePerHour,
        totalPrice,
      },
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
        <p>End Time: {calculateEndTime().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleBooking}>
        Book Now
      </button>
      <p className="price-per-hour mt-2">
        Price per hour: ${pricePerHour}
      </p>
      <p className="total-price mt-2">
        Total Price: ${totalPrice}
      </p>
    </div>
  );
}

export default BookingForm;



