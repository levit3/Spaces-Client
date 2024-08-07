import './SpaceDetails.css';
import React, { useState, useEffect } from "react";


const spaceAmenities = [
  [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f1ae2af896bb4d70d3f552bec65c5331ca12ee741265ba9a8ca27328be9f9ceb?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Phone' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/af6a3ffce876291184ac1be60c4f05f6ce5217dc4331e57254667068dcb02ac0?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Printer' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/820eeb0b03d65dbb6071e7acb90a130178ce10e1805cd3b7c8314e18bf8fbcae?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Coffee' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5927d4f2c02d0e6190b1d6334f931489fc0b52cd47e06acb8f3626039378b1b2?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Flat Screen monitors' }
  ],
  [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1950ec5ddc5a5c6afe89005e2c127d7b59c6d1f3f824e1491e40c2a2bb8785f?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'City views' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/787cf43c638f10c8dbcc3663b412e3df875c53b647becfdaca53bb20dc754348?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Air conditioning' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/71cfa101701a539a51b96b4acd087a4b3dd85f535cd059e41db90d53b6f85360?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Modern Furniture' }
  ]
];

const buildingAmenities = [
  [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/38d0abfabea48ac31a74d5e5819a7e12a1d1a6dffbed379a22a0275c0eb7e544?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Mail delivery' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1cbcba5b084f88e75e30a2ae7900611dcd2d1ee5aead08b3f79f469c11910d71?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Taxi service' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/959ac361fd25afe6b8d485ce09573bcdeec69881b3fb9f45bd392ab0aac49a87?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Library' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9ebea37976023593ba7f5ee0d8b78bdf9ac2b8d6cc565ccab2b720963cedf0a3?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Bus line' }
  ],
  [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d41ba2f82ea1ec6579303bc121283a7a92e3cffea312c7c03660efd612626c1e?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Restaurant' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75f8e7c8e99ef696438cae680d8cde6c4e3a9930e2d7382fa947391ae1dfd639?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'Shops nearby' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/704d4666b29af8e4ebd722b224872a4bfd792056ae931cb5dcff1b8661603801?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929', text: 'ATMs' }
  ]
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

const handleBooking = () => {
  // Implement booking logic here
};

const LocationInfo = ({ content, icon, text }) => {
  return (
    <div className="info-item">
      <img src={icon} alt="" className="info-icon" />
      <div>
        <p>
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
  {'★'.repeat(fullStars)}
  {halfStars ? '☆' : ''}
  {'☆'.repeat(emptyStars)}
</>
);}

function SpaceDetails() {
    // const { id } = useParams();
    const [space, setSpace] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetch("http://localhost:5555/api/spaces/1/")
        .then((res) => res.json())
        .then((data) => {
          setSpace(data);
          setLoading(true)
          
        })
        .catch((error) => {
          console.error("Error fetching space:", error);
        });
    }, []);

    if(!loading){
      return <div>Loading...</div>;
      }
    
     console.log(space)
   
     let reviews = [];
     for(let i=0; i<space[0].reviews.length; i++){
       reviews.push( space[0].reviews[i])
     }
     
     let rating = 0;
     for(let i=0; i<reviews.length; i++){
       rating += reviews[i].rating;
     }
   

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
            <h1 className="space-name">{space[0].title}</h1>
            <div className="space-info">
              <LocationInfo icon="https://cdn.builder.io/api/v1/image/assets/TEMP/76d3bc63153d23a77bbfa39be3e406830363942a9c64eb8eedc38023d56159ad?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929" content={"Location"} text={space[0].location}/>
              <LocationInfo icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa50eb04150a2a3afd7f072254bd1ddf09eb496c23e4ebc4e0e906958f3437a8?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929"  content={"Capacity"} text={space[0].price_per_hour}/>
              <LocationInfo icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa50eb04150a2a3afd7f072254bd1ddf09eb496c23e4ebc4e0e906958f3437a8?apiKey=af3c8a520d554d22a850d6116441e929&&apiKey=af3c8a520d554d22a850d6116441e929"  content={"Price per hour"} text={space[0].price_per_hour}/>
              </div>
           <hr className="divider" />
            <p className="space-description"> {space[0].description}</p>
            <div className="space-rate">Rate: {renderStars(rating)}</div>
            <button className="booking-button" onClick={handleBooking}>Book It</button>
          </section>
        </div>
        </article>
        <div className="service-container">
        {services.map((service, index) => (
          <ServiceCard key={index} iconSrc={service.iconSrc} title={service.title} />
        ))}
      </div>
      <SpaceAndBuildingAmenities/>
    </div>
);}

export default SpaceDetails;