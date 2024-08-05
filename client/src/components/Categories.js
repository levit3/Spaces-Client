import React from "react";
import "./Homepage.css";

const Categories = () => {
  return (
    <div className="categories-section">
      <div className="category">
        <div className="category__content">
          <h2>Prime Locations</h2>
          <p>
            Our offices are strategically located in the heart of the city,
            putting you right where the action is. Impress clients, attract
            talent, and network with industry peers, all from your prestigious
            address.
          </p>
          <a href="#" className="category__link">
            See more
          </a>
        </div>
        <div
          className="category__image"
          style={{ backgroundImage: 'url("path/to/your/image1.jpg")' }}
        ></div>
      </div>
      <div className="category">
        <div className="category__content">
          <h2>The Future of Office Space</h2>
          <p>
            Discover a new way to work - one that prioritizes flexibility,
            convenience, and community. Your success is our priority, and we're
            here to provide the workspace you need to thrive.
          </p>
          <a href="#" className="category__link">
            See more
          </a>
        </div>
        <div
          className="category__image"
          style={{ backgroundImage: 'url("path/to/your/image2.jpg")' }}
        ></div>
      </div>
      <div className="category">
        <div className="category__content">
          <h2>Modern Amenities</h2>
          <p>
            Enjoy state-of-the-art facilities and amenities designed to support
            your productivity and comfort. From high-speed internet to fully
            equipped meeting rooms, we've got you covered.
          </p>
          <a href="#" className="category__link">
            See more
          </a>
        </div>
        <div
          className="category__image"
          style={{ backgroundImage: 'url("path/to/your/image3.jpg")' }}
        ></div>
      </div>
      <div className="category">
        <div className="category__content">
          <h2>Community and Networking</h2>
          <p>
            Join a vibrant community of professionals and entrepreneurs. Attend
            exclusive networking events and workshops to connect, learn, and
            grow your business.
          </p>
          <a href="#" className="category__link">
            See more
          </a>
        </div>
        <div
          className="category__image"
          style={{ backgroundImage: 'url("path/to/your/image4.jpg")' }}
        ></div>
      </div>
    </div>
  );
};

export default Categories;
