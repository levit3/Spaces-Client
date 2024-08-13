import React, { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import BookingForm from "./BookingForm";
import "./BookingDetails.css";
import { useLocation, useParams } from "react-router-dom";

function BookingDetails() {
  const [space, setSpace] = useState();
  const [loading, setLoading] = useState(true);
  const react_location = useLocation();
  const { id, title, description, location, capacity, price_per_hour } =
    react_location.state || {};
  useEffect(() => {
    try {
      fetch(`/api/spaces/${id}/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSpace(data);
          setLoading(false);
        });
    } catch (err) {
      console.error("Error fetching space data:", err);
    }
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="booking-details-main">
      <div className="booking-details-container">
        <div>
          <div className="booking-details-content">
            <section className="booking-details-section">
              <div className="booking-details-info">
                <div className="booking-details-header">
                  <header className="booking-details-title">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/31b658a717fde6cd8a2dc59b7fac2d81e75ebc91ef9bce56d48743e1f89d085e?apiKey=795a4821ae2d43fd8710fcb3d714d4fc"
                      alt=""
                      className="booking-details-icon"
                      onClick={handleBack}
                      style={{ cursor: "pointer" }}
                    />
                    <h1>Booking details</h1>
                  </header>
                  <h1 style={{ color: "white" }}>{title}</h1>
                  <nav className="booking-details-nav">
                    <div className="booking-details-nav-item">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f93bb20acc399b5781b0e027ee4d11f9795ea2f3947f479c769a619dc44185d4?apiKey=795a4821ae2d43fd8710fcb3d714d4fc"
                        alt=""
                        className="booking-details-nav-icon"
                      />
                      <span>{location}</span>
                    </div>
                    <div className="booking-details-nav-item">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa50eb04150a2a3afd7f072254bd1ddf09eb496c23e4ebc4e0e906958f3437a8?apiKey=795a4821ae2d43fd8710fcb3d714d4fc"
                        alt=""
                        className="booking-details-nav-icon"
                      />
                      <span>{capacity}</span>
                    </div>
                    <div className="booking-details-nav-item">
                      <img
                        loading="lazy"
                        src="https://image.pngaaa.com/716/1110716-middle.png"
                        alt=""
                        className="booking-details-nav-icon"
                      />
                      <span>${price_per_hour} per hour</span>
                    </div>
                  </nav>
                  <hr className="booking-details-divider" />
                  <p className="booking-details-description">{description}</p>
                </div>
                <ImageGallery />
              </div>
            </section>
            <aside className="booking-details-aside">
              <BookingForm id={id} price_per_hour={price_per_hour} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookingDetails;
