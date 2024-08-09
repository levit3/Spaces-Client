import React from "react";
import "./Homepage";

const HeroSection = () => {
  return (
    <div
      className="hero"
      loading="lazy"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/d37749fb8a65488d31febb1719da3afc8d2c6a6579606b9b6604fe858faf38ec?apiKey=598a59b5422d492eb1a6de6a6fee0a4b')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero__content">
        <h1>Rent Spaces Tailored to Your Niche</h1>
      </div>
    </div>
  );
};

export default HeroSection;
