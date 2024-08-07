import React, { useState, useEffect } from "react";

function SuccessfulPayment() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="booking-main">
      <section className="booking-section">
        <header className="booking-header">
          <div className="booking-header-inner">
            <div className="booking-header-content">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c61212f445a76c7c844598086e615c113f76f4d37be9d397e1f9edd7b1249a03?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
                className="booking-confirmation-icon"
                alt="Confirmation icon"
              />
              <div className="booking-header-text">
                <h1 className="booking-title">Your booking is confirmed!</h1>
                <p className="booking-subtitle">
                  You'll receive the summary on your email as well.
                </p>
              </div>
            </div>
          </div>
          <div className="booking-divider" />
        </header>

        <section className="booking-details">
          <div className="booking-detail-item">
            <div className="booking-detail-label">{booking.user.name}</div>
            <div className="booking-detail-value">
              <span style={{ fontWeight: "bold" }}>Address &nbsp;</span>
              {booking.space.location}
            </div>
            <div className="booking-detail-value">
              <span style={{ fontWeight: "bold" }}>Email&nbsp; </span>
              {booking.user.email}
            </div>
          </div>
        </section>

        <section className="booking-images">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bf8eda7cd26c569c8602c6461bceba6d573ac444cc8fc3034a127d82df3beec?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
            className="booking-location-image"
            alt="Location overview"
          />
          <div className="booking-map-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/431b3366774eb678a9899786be3ce48e826aa64d2195f4f3cec98df836230ba1?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
              className="booking-map-image"
              alt="Location map"
            />
            <div className="booking-address">8383 Wilshire Boulevard</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/562e66a60d727c6e63a635082e123efcef8a6ca3b691e855d0932d9da235420f?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271"
              className="booking-pin-icon"
              alt="Location pin"
            />
          </div>
        </section>
        <section className="booking-details" style={{ marginTop: "40px" }}>
          <div className="booking-detail-item">
            <div className="booking-detail-item">
              <span style={{ fontWeight: "bold" }}>
                Date of your event &nbsp;
              </span>
              {booking.start_date}
            </div>
            <div className="booking-detail-value">
              Payment&nbsp; {booking.payment.id}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default SuccessfulPayment;
