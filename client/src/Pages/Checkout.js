import React, { useState, useEffect } from "react";
import "./CSS/Checkout.css";

function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState("paypal");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [mpesaPhone, setMpesaPhone] = useState("");
  const [date, setDate] = useState("");
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/api/bookings/1/")
      .then((response) => response.json())
      .then((data) => {
        setBooking(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleClick = (method) => {
    setSelectedMethod(method);
  };

  const handleBack = () => {
    window.history.back();
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <section className="checkout-section">
          <header className="checkout-header">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31b658a717fde6cd8a2dc59b7fac2d81e75ebc91ef9bce56d48743e1f89d085e?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
              alt=""
              className="header-logo"
              onClick={handleBack}
            />
            <h1 className="header-title">Checkout</h1>
          </header>

          <section className="contact-info">
            <div className="contact-header">
              <h2 className="contact-title">Contact Information</h2>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="firstName" className="field-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="text-input"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName" className="field-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="text-input"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="phoneNumber" className="field-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="text-input"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="dateInput" className="field-label">
                    Date
                  </label>
                  <input
                    type="date"
                    id="dateInput"
                    className="date-input"
                    defaultValue={getCurrentDate()}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </section>

          <section className="payment-info">
            <h2 className="payment-title">Payment Information</h2>
            <div className="payment-methods">
              <button
                className={`method ${
                  selectedMethod === "paypal" ? "selected" : ""
                }`}
                onClick={() => handleClick("paypal")}
              >
                <img
                  loading="lazy"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-54-675727.png?f=webp&w=256"
                  alt="Paypal"
                  id="paypal"
                  className="payment-icon"
                  style={{ color: "#a1a4b2" }}
                />
              </button>
              <button
                className={`method ${
                  selectedMethod === "mpesa" ? "selected" : ""
                }`}
                onClick={() => handleClick("mpesa")}
              >
                <img
                  loading="lazy"
                  src="https://pbs.twimg.com/ext_tw_video_thumb/1181852139011936256/pu/img/1UCUl2bSj2RCyq6H.jpg"
                  alt="Mpesa"
                  id="mpesa"
                  className="payment-icon"
                  style={{ color: "#a1a4b2" }}
                />
              </button>
            </div>
            <form className="payment-form">
              <div className="form-group">
                {selectedMethod === "paypal" ? (
                  <div className="form-field">
                    <label htmlFor="paypalEmail" className="field-label">
                      PayPal Email Address
                    </label>
                    <input
                      type="email"
                      className="text-input"
                      placeholder="Email Address"
                      id="paypalEmail"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="form-field">
                    <label htmlFor="mpesaPhoneNumber" className="field-label">
                      Mpesa Phone Number
                    </label>
                    <input
                      type="tel"
                      className="text-input"
                      placeholder="Phone Number"
                      id="mpesaPhoneNumber"
                      value={mpesaPhone}
                      onChange={(e) => setMpesaPhone(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </form>
          </section>
          <button className="pay-button">Pay</button>
        </section>

        <aside className="order-summary">
          <div className="order-item">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08487b5ee798c31a0fe63c92fd3404dd438c2823d2380ddddda58cc097e28237?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
              alt="Event image"
              className="event-image"
            />
            <div className="event-details">
              <div className="event-name">
                <h3 className="event-title">{booking.space.title}</h3>
                <p className="event-location">{booking.space.location}</p>
              </div>
              <div className="event-meta">
                <div className="event-date">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/66b71e1bcee8b939681737dbc8d2750c4241c1ca880319c8a133c095595aec15?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
                    alt=""
                    className="meta-icon"
                  />
                  <span>
                    {booking.start_date} - {booking.end_date}
                  </span>
                </div>
                <div className="event-capacity">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e72e4f7cc397f1ce9ffa2a30d458e0b59b2e070ecc4d289c5d3c36cb7ebbb3f?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
                    alt=""
                    className="meta-icon"
                  />
                  <span>100-200</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-total">
            <hr className="total-divider" />
            <div className="total-summary">
              <span>Total</span>
              <span className="total-amount">{booking.total_price}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
