import React, { useState, useEffect } from "react";
import "./Homepage.css";
const API = process.env.REACT_APP_SERVER_API;

function LatestSpaces() {
  const [properties, setProperties] = useState([]);

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
      })
      .catch((error) => {
        console.error("Error fetching spaces data:", error);
      });
  }, []);

  return (
    <div className="properties">
      <h2>Latest Listed Spaces</h2>
      <div className="properties__list">
        {properties.slice(0, 5).map((property, index) => (
          <div key={index} className="property">
            <img src={property.image} alt={property.city} />
            <div className="property__info">
              <h3>{property.price}</h3>
              <p>{property.city}</p>
              <p>{property.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestSpaces;
