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
          <button className="see-more-btn">See more</button>
        </div>
        <div className="card-image">
          <img
            src="/path-to-prime-locations-image.jpg"
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
          <button className="see-more-btn">See more</button>
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
          <button className="see-more-btn">See more</button>
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
          <button className="see-more-btn">See more</button>
        </div>
        <div className="card-image">
          <img src="/path-to-community-image.jpg" alt="Office community" />
        </div>
      </div>
    </div>
  );
};

export default Categories;

// import React, { useEffect, useRef } from "react";
// import "./Homepage.css";

// const Categories = () => {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       cardsRef.current.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   const cards = [
//     {
//       subtitle: "CHECKOUT OUR",
//       title: "Prime Locations",
//       description:
//         "Our offices are strategically located in the heart of the city, putting you right where the action is. Impress clients, attract talent, and network with industry peers, all from your prestigious address.",
//       image: "/path-to-prime-locations-image.jpg",
//       alt: "Prime office building",
//     },
//     //card 2
//   ];

//   return (
//     <div className="office-space-showcase">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`card ${index % 2 !== 0 ? "reversed" : ""}`}
//           ref={(el) => (cardsRef.current[index] = el)}
//         >
//           <div className="card-content">
//             <h2 className="card-title">
//               <span className="subtitle">{card.subtitle}</span>
//               {card.title}
//             </h2>
//             <p className="card-description">{card.description}</p>
//             <button className="see-more-btn">See more</button>
//           </div>
//           <div className="card-image">
//             <img src={card.image} alt={card.alt} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Categories;
