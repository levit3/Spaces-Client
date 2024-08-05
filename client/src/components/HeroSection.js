import React from "react";
import "./Homepage";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1>Rent Spaces Tailored to Your Niche</h1>
        <div className="hero__description">
          <p>
            At SPACES, we provide a diverse range of venues tailored to suit any
            occasion, whether it's a corporate meeting, a social gathering, or a
            special event. Our platform makes it easy to find and book the
            perfect space, ensuring your event is memorable and successful. In
            addition to our venue rentals, we offer a comprehensive events
            calendar showcasing upcoming happenings in your area, and tools to
            create and manage your own events seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
