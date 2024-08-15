import "./SpaceDetails.css";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";

const spaceAmenities = [
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1ae2af896bb4d70d3f552bec65c5331ca12ee741265ba9a8ca27328be9f9ceb?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Phone",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/af6a3ffce876291184ac1be60c4f05f6ce5217dc4331e57254667068dcb02ac0?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Printer",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/820eeb0b03d65dbb6071e7acb90a130178ce10e1805cd3b7c8314e18bf8fbcae?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Coffee",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5927d4f2c02d0e6190b1d6334f931489fc0b52cd47e06acb8f3626039378b1b2?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Flat Screen monitors",
    },
  ],
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1950ec5ddc5a5c6afe89005e2c127d7b59c6d1f3f824e1491e40c2a2bb8785f?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "City views",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/787cf43c638f10c8dbcc3663b412e3df875c53b647becfdaca53bb20dc754348?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Air conditioning",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/71cfa101701a539a51b96b4acd087a4b3dd85f535cd059e41db90d53b6f85360?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Modern Furniture",
    },
  ],
];

const buildingAmenities = [
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38d0abfabea48ac31a74d5e5819a7e12a1d1a6dffbed379a22a0275c0eb7e544?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Mail delivery",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cbcba5b084f88e75e30a2ae7900611dcd2d1ee5aead08b3f79f469c11910d71?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Taxi service",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/959ac361fd25afe6b8d485ce09573bcdeec69881b3fb9f45bd392ab0aac49a87?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Library",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ebea37976023593ba7f5ee0d8b78bdf9ac2b8d6cc565ccab2b720963cedf0a3?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Bus line",
    },
  ],
  [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d41ba2f82ea1ec6579303bc121283a7a92e3cffea312c7c03660efd612626c1e?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Restaurant",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/75f8e7c8e99ef696438cae680d8cde6c4e3a9930e2d7382fa947391ae1dfd639?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "Shops nearby",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/704d4666b29af8e4ebd722b224872a4bfd792056ae931cb5dcff1b8661603801?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
      text: "ATMs",
    },
  ],
];

const AmenityItem = ({ icon, text }) => (
  <div className="amenityItem">
    <img loading="lazy" src={icon} alt="" className="amenityIcon" />
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

const services = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/491d2468e904e832c55d2124f160bb699ef2c57515621c210448b21b8fd6661a?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
    title: "Virtual Office Address",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/245b802fa793a1dce66722f9a263dba8ef4bfd00fc83f523ab2f5ed0da35a37c?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
    title: "Virtual Mailbox",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/74e23d7f493c763b27621346f246c0b58b40339097fee3e8b5b96a75ed8cb837?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
    title: "Meeting Space and Conference Rooms",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c3aed0585ae6cc459067f51596fe176919e9817df767b77d76cbcb74326604?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
    title: "Live Receptionist Services",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a0a0b1c14078ea45f22a29ce295942f304bb4a35ceccbecfe1013b1d85d3636c?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929",
    title: "Virtual Phone Numbers",
  },
];

const ServiceCard = ({ iconSrc, title }) => {
  return (
    <article className="service-card">
      <div className="icon-wrapper">
        <img loading="lazy" src={iconSrc} alt="" className="icon" />
      </div>
      <h2 className="service-title">{title}</h2>
    </article>
  );
};

const LocationInfo = ({ content, icon, text }) => {
  return (
    <div className="info-item">
      <img src={icon} alt="" className="info-icon" />
      <div>
        <p className="icon-name">
          {content}: {text}
        </p>
      </div>
    </div>
  );
};

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      {"★".repeat(fullStars)}
      {halfStars ? "☆" : ""}
      {"☆".repeat(emptyStars)}
    </>
  );
};

function SpaceDetails() {
  const { id } = useParams();
  const [space, setSpace] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch(`/api/spaces/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setSpace(data);
        setLoading(true);
        console.log(data);
        setImg(data.space_images);
        console.log(img);

        const reviews = data.reviews;
        const totalRatings = reviews.reduce(
          (acc, review) => acc + review.rating,
          0
        );
        setRating(reviews.length > 0 ? totalRatings / reviews.length : 0);
      })

      .catch((error) => {
        console.error("Error fetching space:", error);
      });
  }, [id, img]);

  if (!loading) {
    return (
      <div className="loading-container">
        <img
          className="loading"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
          alt="Loading..."
        />
      </div>
    );
  }
  const images = {
    main: img[0].image_url,
    thumbnails: [img[1].image_url, img[2].image_url, img[3].image_url],
  };

  console.log(space);

  return (
    <div className="display-item">
      <Navbar />
      <article className="main">
        <div className="images">
          <img src={images.main} alt="Main view" className="main-image" />
          <div className="thumbnail-container">
            {images.thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-image"
              />
            ))}
          </div>
        </div>
        <div className="space-details">
          <section className="space">
            <h1 className="space-name">{space.title}</h1>
            <div className="space-info">
              <LocationInfo
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/76d3bc63153d23a77bbfa39be3e406830363942a9c64eb8eedc38023d56159ad?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929"
                content={"Location"}
                text={space.location}
              />
              <LocationInfo
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa50eb04150a2a3afd7f072254bd1ddf09eb496c23e4ebc4e0e906958f3437a8?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929"
                content={"Capacity"}
                text={space.capacity}
              />
              <LocationInfo
                icon="data:image/png;base64,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"
                content={"Price per hour"}
                text={space.price_per_hour}
              />
            </div>
            <hr className="divider" />
            <p className="space-description"> {space.description}</p>
            <div className="space-rate">Rate: {renderStars(rating)}</div>
            <Link to={`/booking/${id}/`}>
              <button className="booking-button">Book It</button>
            </Link>
            <Link to={`/review/${id}/`}>
              <button className="booking-button">Add Review</button>
            </Link>
          </section>
        </div>
      </article>
      <div className="service-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            iconSrc={service.iconSrc}
            title={service.title}
          />
        ))}
      </div>
      <SpaceAndBuildingAmenities />
    </div>
  );
}

export default SpaceDetails;
