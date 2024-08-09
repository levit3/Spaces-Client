import React from "react";
import "./BookingForm.css";

function BookingForm() {
  return (
    <form className="booking-form">
      <h2>One time purchase</h2>
      <div className="booking-form-field">
        <label htmlFor="dateSelect">Please select</label>
        <div className="booking-form-input">
          <div>
            <span>Date</span>
            <input type="date" id="dateSelect" defaultValue="2022-08-28" />
          </div>
        </div>
      </div>
      <button type="submit">Book it</button>
      <div className="booking-form-total">
        <hr />
        <div>
          <span>Total</span>
          <span>$138.00</span>
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
