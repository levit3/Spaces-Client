// import React from "react";
// import "./Homepage.css";

// const LatestSpaces = () => {
//   const properties = [
//     {
//       city: "Beverly Hills, CA",
//       price: "$60 / hour",
//       address: "8383 Wilshire Boulevard",
//       image:
//         "https://media.istockphoto.com/id/1703143596/photo/rodeo-drive-in-beverly-hills.webp?b=1&s=170667a&w=0&k=20&c=W7OGu4M6cLpwLCUie0jtSRsvig6n7oUSpw0k9k7-D-Q=",
//     },
//     {
//       city: "Washington",
//       price: "$60 / hour",
//       address: "800 Connecticut Ave",
//       image:
//         "https://media.istockphoto.com/id/1791717926/photo/national-mall-washington-dc.webp?b=1&s=170667a&w=0&k=20&c=13kymQxL2fyVHGZmI2GhQCDolcNkPYRNCp4fS2tUQZU=",
//     },
//     {
//       city: "Federal Plaza, NY",
//       price: "$60 / hour",
//       address: "305 Broadway",
//       image:
//         "https://images.unsplash.com/photo-1590940436753-5a97394e91bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlZGVyYWwlMjBwcmF6YXxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       city: "Albany, NY",
//       price: "$60 / hour",
//       address: "890 State St 7th Floor",
//       image:
//         "https://media.istockphoto.com/id/1574462589/photo/downtown-albany-capital-city-of-new-york.webp?b=1&s=170667a&w=0&k=20&c=gAVMnGpt3-ZwIZjUQXIx5gT6x16h3IYsOr3RusQt9YI=",
//     },
//     {
//       city: "Dallas, TX",
//       price: "$60 / hour",
//       address: "8150 N Central Expy 10th Floor",
//       image:
//         "https://media.istockphoto.com/id/2125651528/photo/dallas-skyline-aerial.webp?b=1&s=170667a&w=0&k=20&c=4IAhe3lt3Jvtvv0-5T9AMYlCV33qwuOAht9GGKaFw3s=",
//     },
//   ];

//   return (
//     <div className="properties">
//       <h2>Latest Listed Spaces</h2>
//       <div className="properties__list">
//         {properties.map((property, index) => (
//           <div key={index} className="property">
//             <img src={property.image} alt={property.city} />
//             <div className="property__info">
//               <h3>{property.price}</h3>
//               <p>{property.city}</p>
//               <p>{property.address}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestSpaces;

import React from "react";
import "./Homepage.css";

const LatestSpaces = () => {
  const properties = [
    {
      city: "Beverly Hills, CA",
      price: "$60 / hour",
      address: "8383 Wilshire Boulevard",
      image:
        "https://media.istockphoto.com/id/1703143596/photo/rodeo-drive-in-beverly-hills.webp?b=1&s=170667a&w=0&k=20&c=W7OGu4M6cLpwLCUie0jtSRsvig6n7oUSpw0k9k7-D-Q=",
    },
    {
      city: "Washington",
      price: "$60 / hour",
      address: "800 Connecticut Ave",
      image:
        "https://media.istockphoto.com/id/1791717926/photo/national-mall-washington-dc.webp?b=1&s=170667a&w=0&k=20&c=13kymQxL2fyVHGZmI2GhQCDolcNkPYRNCp4fS2tUQZU=",
    },
    {
      city: "Federal Plaza, NY",
      price: "$60 / hour",
      address: "305 Broadway",
      image:
        "https://images.unsplash.com/photo-1590940436753-5a97394e91bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlZGVyYWwlMjBwcmF6YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      city: "Albany, NY",
      price: "$60 / hour",
      address: "890 State St 7th Floor",
      image:
        "https://media.istockphoto.com/id/1574462589/photo/downtown-albany-capital-city-of-new-york.webp?b=1&s=170667a&w=0&k=20&c=gAVMnGpt3-ZwIZjUQXIx5gT6x16h3IYsOr3RusQt9YI=",
    },
    {
      city: "Dallas, TX",
      price: "$60 / hour",
      address: "8150 N Central Expy 10th Floor",
      image:
        "https://media.istockphoto.com/id/2125651528/photo/dallas-skyline-aerial.webp?b=1&s=170667a&w=0&k=20&c=4IAhe3lt3Jvtvv0-5T9AMYlCV33qwuOAht9GGKaFw3s=",
    },
  ];

  return (
    <div className="properties">
      <h2>Latest Listed Spaces</h2>
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
