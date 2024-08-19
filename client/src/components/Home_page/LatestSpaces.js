import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_SERVER_API;

function LatestSpaces() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/api/spaces`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching spaces data:", error);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">Fetching</div>
      </div>
    );
  }

  return (
    <div className="properties">
      <h2>Latest Listed Spaces</h2>
      <div className="properties__list">
        {properties.slice(0, 5).map((property, index) => (
          <div
            key={index}
            className="property"
            onClick={() => navigate(`/space/${property.id}`)}
          >
            <img src={property.space_images[0].image_url} alt={property.city} />
            <div className="property__info">
              <h4>${property.price_per_hour}</h4>
              <p>{property.title}</p>
              <p>{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestSpaces;
