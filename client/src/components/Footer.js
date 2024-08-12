import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/api/spaces")
      .then((response) => response.json())
      .then((data) => {
        const fetchedLocations = data.slice(0, 5).map((space) => space);
        setLocations(fetchedLocations);
      });
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <h2 className="heading">Rental</h2>
          <address className="address">
            <div className="contact-item" style={{ marginTop: "10px" }}>
              <span>Email</span>
            </div>
            <span className="address-text">Address</span>
          </address>
        </div>

        <nav className="nav">
          <h3 className="subheading">Quick Links</h3>
          <ul className="list">
            {["Home", "About", "Listings", "Terms and conditions"].map(
              (link, index) => (
                <li key={index}>
                  <a href="#" className="link">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <nav className="nav">
          <h3 className="subheading">Discover</h3>
          <ul className="list">
            {locations.map((location, index) => (
              <li key={index}>
                <Link to={`/space/${location.id}`} className="link">
                  {location.location}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
