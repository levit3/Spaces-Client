import React from "react";
import "./Homepage.css";

const LatestSpaces = () => {
  const properties = [
    {
      city: "Beverly Hills, CA",
      price: "$60 / hour",
      address: "8383 Wilshire Boulevard",
      image: "path/to/image1.jpg",
    },
    {
      city: "Washington",
      price: "$60 / hour",
      address: "800 Connecticut Ave",
      image: "path/to/image2.jpg",
    },
    {
      city: "Federal Plaza, NY",
      price: "$60 / hour",
      address: "305 Broadway",
      image: "path/to/image3.jpg",
    },
    {
      city: "Albany, NY",
      price: "$60 / hour",
      address: "890 State St 7th Floor",
      image: "path/to/image4.jpg",
    },
    {
      city: "Dallas, TX",
      price: "$60 / hour",
      address: "8150 N Central Expy 10th Floor",
      image: "path/to/image5.jpg",
    },
  ];

  return (
    <div className="properties">
      <h2>Latest Listed Properties</h2>
      <div className="properties__filters">
        <button>Locations near me</button>
        <button>Top locations</button>
        <button>See all</button>
        <select>
          <option>Select city</option>
          <option>City 1</option>
          <option>City 2</option>
        </select>
      </div>
      <div className="properties__list">
        {properties.map((property, index) => (
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
};

export default LatestSpaces;
