import React, { useState, useEffect } from "react";
import "./CSS/SussessfulPayment.css";
import { useLocation } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function SuccessfulPayment() {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    fetch(`/api/bookings/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        const sign = data.payment.payment_method === "mpesa" ? "Ksh" : "$";
        setBooking(data);
        fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: data.user.email,
            textPart: `
              Dear ${data.user.name},

              Your booking has been confirmed for the following space:

              Space: ${data.space.title}
              Location: ${data.space.location}
              Start Date: ${data.start_date}
              End Date: ${data.end_date}
              Total Price: ${sign}${data.total_price}

              Thank you for booking your event space with us.

              Best regards,
              Your Space
            `,
            htmlPart: `
            <html>
              <body
                style="
                  margin: 0;
                  padding: 0;
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                "
              >
                <table
                  width="100%"
                  bgcolor="#f4f4f4"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <td>
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        width="600"
                        style="
                          border-collapse: collapse;
                          border: 1px solid #cccccc;
                          background-color: #ffffff;
                        "
                      >
                        <tr>
                          <td
                            align="center"
                            style="padding: 40px 0 30px 0; background-color: #007bff"
                          >
                            <h1 style="color: #ffffff; margin: 0">Booking Confirmation</h1>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 20px 30px 40px 30px">
                            <p style="font-size: 16px; line-height: 1.5; color: #333333">
                              Dear ${data.user.name},
                            </p>
                            <p style="font-size: 16px; line-height: 1.5; color: #333333">
                              Your booking has been confirmed for the following space:
                            </p>
                            <ul
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                color: #333333;
                                padding-left: 20px;
                              "
                            >
                              <li><strong>Space:</strong> ${data.space.title}</li>
                              <li><strong>Location:</strong> ${data.space.location}</li>
                              <li><strong>Start Date:</strong> ${data.start_date}</li>
                              <li><strong>End Date:</strong> ${data.end_date}</li>
                              <li>
                                <strong>Total Price:</strong> ${sign}${data.total_price}
                              </li>
                            </ul>
                            <p style="font-size: 16px; line-height: 1.5; color: #333333">
                              Thank you for booking your event space with us.
                            </p>
                            <p style="font-size: 16px; line-height: 1.5; color: #333333">
                              Best regards,<br />
                              Your Space
                            </p>
                             <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 20px 0;">
                              <tr>
                                <td align="center">
                                  <a href="http://127.0.0.1:3000" style="background-color: #007BFF; color: #ffffff; padding: 10px 20px; text-decoration: none; font-size: 16px; border-radius: 5px; display: inline-block;">
                                    Visit Our Website
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="center"
                            style="padding: 20px 0; background-color: #007bff"
                          >
                            <p style="font-size: 14px; color: #ffffff; margin: 0">
                              &copy; 2024 Your Space. All rights reserved.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
        `,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
        setLoading(false);
      });
  }, []);

  if (!location.state || !id) {
    return <PageNotFound />;
  }

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
              {booking.space.title}, {booking.space.location}
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
            <div className="booking-address">{booking.space.location}</div>
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
              <span style={{ fontWeight: "bold" }}>Date of Booking &nbsp;</span>
              {booking.start_date}
            </div>
            <div className="booking-detail-item">
              <span style={{ fontWeight: "bold" }}>Payment &nbsp;</span>
              <span style={{ textTransform: "capitalize" }}>
                {booking.payment[0].payment_method}
              </span>
            </div>
          </div>
        </section>
        <button className="button solid" onClick={(window.location.href = "/")}>
          Go back home
        </button>
      </section>
    </main>
  );
}

export default SuccessfulPayment;
