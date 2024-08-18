import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CSS/EventDetail.css";
const API = process.env.REACT_APP_SERVER_API;

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const src =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/dfe3240009fd425ddb9fe0e226d9444abbf3e86a4d8c9e87b75a5e5e7efef0f6?apiKey=8ad21786488a40e8a18ed0f9f1e05271&&apiKey=8ad21786488a40e8a18ed0f9f1e05271";

  useEffect(() => {
    fetch(`${API}/api/events/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">Fetching</div>
      </div>
    );
  }

  return (
    <main>
      <img
        src="https://img.icons8.com/?size=100&id=60636&format=png&color=FFFFFF"
        alt="back"
        onClick={() => {
          window.history.back();
        }}
        className="back-button"
      />
      <div className="header">
        <section className="event-info">
          <h1 className="event-name">{event.title}</h1>
          <div className="event-location">
            {event.space.title}, {event.space.location}
          </div>
        </section>
      </div>
      <section className="event-hero">
        <section className="event-details">
          <div className="event-description">{event.description}</div>
          <img loading="lazy" src={src} alt="imge" className="event-image" />
        </section>
      </section>
    </main>
  );
}

export default EventDetail;
