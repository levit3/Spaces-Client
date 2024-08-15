import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              Home
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="/spaces" className="footer-nav-link">
              Spaces
            </a>
          </li>

          <li className="footer-nav-item">
            <a href="/about" className="footer-nav-link">
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
