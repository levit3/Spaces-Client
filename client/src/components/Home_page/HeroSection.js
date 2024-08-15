import React, { useState, useEffect } from "react";
import "./Homepage.css";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src =
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d37749fb8a65488d31febb1719da3afc8d2c6a6579606b9b6604fe858faf38ec?apiKey=598a59b5422d492eb1a6de6a6fee0a4b";
    image.onload = () => setImageLoaded(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`hero ${imageLoaded ? "hero--loaded" : ""}`}>
      {imageLoaded && (
        <div
          className="hero__background"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/d37749fb8a65488d31febb1719da3afc8d2c6a6579606b9b6604fe858faf38ec?apiKey=598a59b5422d492eb1a6de6a6fee0a4b')`,
          }}
        />
      )}
      <div className="hero__content-wrapper">
        <div className="hero__content">
          <h1>Rent Spaces Tailored to Your Niche</h1>
        </div>
        {showScrollDown && (
          <div className="scroll-down">
            <span>Scroll Down</span>
            <div className="scroll-down__arrow"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
