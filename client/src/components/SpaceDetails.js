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

function SpaceDetails() {
  return (
    <div className='display-item'>
      <SpaceAndBuildingAmenities/>
    </div>
);
}

export default SpaceDetails;