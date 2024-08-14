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
    <div className="footer-container">
      <footer className="footer">
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Home
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Features
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Pricing
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              FAQs
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              About
            </a>
          </li>
        </ul>
        <p className="footer-text">2022 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;
