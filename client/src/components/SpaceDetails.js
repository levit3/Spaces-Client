import './SpaceDetails.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const spaceAmenities = [
  // Define your space amenities here
];

const buildingAmenities = [
  // Define your building amenities here
];

const AmenityItem = ({ icon, text }) => (
  <div className="amenityItem">
    <img loading="lazy" src={icon} alt="" className="amenityIcon"/>
    <div>{text}</div>
  </div>
);

const AmenitiesColumn = ({ amenities }) => (
  <div className="amenitiesColumn">
    {amenities.map((item, index) => (
      <AmenityItem key={index} icon={item.icon} text={item.text} />
    ))}
  </div>
);

const SpaceAndBuildingAmenities = () => (
  <section className="amenitiesWrapper">
    <div className="amenitiesGroup">
      <h2 className="sectionTitle">Space Amenities</h2>
      <div className="amenitiesList">
        {spaceAmenities.map((column, index) => (
          <AmenitiesColumn key={index} amenities={column} />
        ))}
      </div>
    </div>
    <div className="separate-divider" role="separator" />
    <div className="buildingAmenitiesWrapper">
      <h2 className="sectionTitle">Building Amenities</h2>
      <div className="buildingAmenitiesList">
        {buildingAmenities.map((column, index) => (
          <AmenitiesColumn key={index} amenities={column} />
        ))}
      </div>
    </div>
  </section>
);

const images = {
  main: "https://cdn.builder.io/api/v1/image/assets/TEMP/92453d94cc346caf6f3c7e3a0146574833be4b8dc1aa1b9a54868b251aef24de?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
  thumbnails: [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/719ac4be35c41674bc169e12d70bf8dce799c470893440f09521a06cc38a79c6?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4ce5de5fe866bc7889a2e3a966b864264c674bf45ef8b141f42a1f3469d15db4?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/11734a50461ff7115c05ccf220b24b2c084d508f2de5f954af06b0e42d69622b?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929"
  ]
};

const services = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/491d2468e904e832c55d2124f160bb699ef2c57515621c210448b21b8fd6661a?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929", title: "Virtual Office Address" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/245b802fa793a1dce66722f9a263dba8ef4bfd00fc83f523ab2f5ed0da35a37c?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929", title: "Virtual Mailbox" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/74e23d7f493c763b27621346f246c0b58b40339097fee3e8b5b96a75ed8cb837?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929", title: "Meeting Space and Conference Rooms" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c3aed0585ae6cc459067f51596fe176919e9817df767b77d76cbcb74326604?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929", title: "Live Receptionist Services" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0a0b1c14078ea45f22a29ce295942f304bb4a35ceccbecfe1013b1d85d3636c?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929", title: "Virtual Phone Numbers" }
];

const ServiceCard = ({ iconSrc, title }) => (
  <article className="service-card">
    <div className="icon-wrapper">
      <img loading="lazy" src={iconSrc} alt="" className="icon" />
    </div>
    <h2 className="service-title">{title}</h2>
  </article>
);

const handleBooking = () => {
  // Implement booking logic here
};

const LocationInfo = ({ content, icon, text }) => (
  <div className="info-item">
    <img src={icon} alt="" className="info-icon" />
    <div>
      <p>
        {content}: {text}
      </p>
    </div>
  </div>
);

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      {'★'.repeat(fullStars)}
      {halfStars ? '☆' : ''}
      {'☆'.repeat(emptyStars)}
    </>
  );
};

function SpaceDetails() {
  const { id } = useParams();
  const [space, setSpace] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/spaces/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setSpace(data);
        console.log(data)
        setLoading(true);
      })
      
      .catch((error) => {
        console.error("Error fetching space:", error);
      });
  }, [id]);

  if (!loading) {
    return (
      <div className='loading-container'>
        <img className='loading' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif' alt='Loading...' />
      </div>
    );
  }

  console.log(space);

  const reviews = space[0]?.reviews || [];
  let rating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  rating = isNaN(rating) ? 3.5 : rating;

  return (
    <div className='display-item'>
      <article className="main">
        <div className="images">
          <img src={images.main} alt="Main view" className="main-image" />
          <div className="thumbnail-container">
            {images.thumbnails.map((src, index) => (
              <img key={index} src={src} alt={`Thumbnail ${index + 1}`} className="thumbnail-image" />
            ))}
          </div>
        </div>
        <div className="space-details">
          <section className="space">
            <h1 className="space-name">{space[0]?.title}</h1>
            <div className="space-info">
              <LocationInfo icon="https://cdn.builder.io/api/v1/image/assets/TEMP/76d3bc63153d23a77bbfa39be3e406830363942a9c64eb8eedc38023d56159ad?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929" content={"Location"} text={space[0]?.location} />
              <LocationInfo icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa50eb04150a2a3afd7f072254bd1ddf09eb496c23e4ebc4e0e906958f3437a8?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929" content={"Capacity"} text={space[0]?.capacity} />
              <LocationInfo icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd87ff28e5808a8cf7065a9827f66e8174e7876f021f0f6e1a13c9f65ef07d6?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929" content={"Price per Hour"} text={`$${space[0]?.price_per_hour}`} />
            </div>
            <div className="space-description">
              <p>{space[0]?.description}</p>
            </div>
            <div className="space-rating">
              <h3>Rating:</h3>
              <div className="stars">{renderStars(rating)}</div>
            </div>
          </section>
          <SpaceAndBuildingAmenities />
          <section className="services-section">
            <h2 className="sectionTitle">Additional Services</h2>
            <div className="services-list">
              {services.map((service, index) => (
                <ServiceCard key={index} iconSrc={service.iconSrc} title={service.title} />
              ))}
            </div>
          </section>
          <button onClick={handleBooking} className="booking-button">Book Now</button>
        </div>
      </article>
    </div>
  );
}

export default SpaceDetails;
