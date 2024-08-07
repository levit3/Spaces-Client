import React from "react";
import "./Homepage.css";

const Categories = () => {
  return (
    <div className="office-space-showcase">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">
            <span className="subtitle">CHECKOUT OUR</span>
            Prime Locations
          </h2>
          <p className="card-description">
            Our offices are strategically located in the heart of the city,
            putting you right where the action is. Impress clients, attract
            talent, and network with industry peers, all from your prestigious
            address.
          </p>
          <h3 className="see-more-btn">See more</h3>
        </div>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1608658405784-4c3ef05ebcc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt="Prime office building"
          />
        </div>
      </div>

      <div className="card reversed">
        <div className="card-content">
          <h2 className="card-title">
            <span className="subtitle">EXPERIENCE</span>
            The Future of Office Space
          </h2>
          <p className="card-description">
            Discover a new way to work – one that prioritizes flexibility,
            convenience, and community. Your success is our priority, and we're
            here to provide the workspace you need to thrive.
          </p>
          <h3 className="see-more-btn">See more</h3>
        </div>
        <div className="card-image">
          <img
            src="/path-to-future-office-image.jpg"
            alt="Modern office space"
          />
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <h2 className="card-title">
            <span className="subtitle">DISCOVER</span>
            Amenities and Services
          </h2>
          <p className="card-description">
            Enjoy a range of premium amenities designed to enhance your work
            experience. From state-of-the-art conference rooms to relaxing
            breakout areas, we've got everything you need for a productive day.
          </p>
          <h3 className="see-more-btn">See more</h3>
        </div>
        <div className="card-image">
          <img src="/path-to-amenities-image.jpg" alt="Office amenities" />
        </div>
      </div>

      <div className="card reversed">
        <div className="card-content">
          <h2 className="card-title">
            <span className="subtitle">JOIN</span>
            Our Community
          </h2>
          <p className="card-description">
            Become part of a vibrant community of professionals. Network,
            collaborate, and grow your business in an environment that fosters
            innovation and success.
          </p>
          <h3 className="see-more-btn">See more</h3>
        </div>
        <div className="card-image">
          <img src="/path-to-community-image.jpg" alt="Office community" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
