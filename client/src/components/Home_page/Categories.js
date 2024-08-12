// import React from "react";
// import "./Homepage.css";

// const Categories = () => {
//   return (
//     <div className="office-space-showcase">
//       <div className="card">
//         <div className="card-content">
//           <h2 className="card-title">
//             <span className="subtitle">CHECKOUT OUR</span>
//             Prime Locations
//           </h2>
//           <p className="card-description">
//             Our offices are strategically located in the heart of the city,
//             putting you right where the action is. Impress clients, attract
//             talent, and network with industry peers, all from your prestigious
//             address.
//           </p>
//           <h3 className="see-more-btn">See more</h3>
//         </div>
//         <div className="card-image">
//           <img
//             src="https://images.unsplash.com/photo-1608658405784-4c3ef05ebcc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
//             alt="Prime office building"
//           />
//         </div>
//       </div>

//       <div className="card reversed">
//         <div className="card-content">
//           <h2 className="card-title">
//             <span className="subtitle">EXPERIENCE</span>
//             The Future of Office Space
//           </h2>
//           <p className="card-description">
//             Discover a new way to work – one that prioritizes flexibility,
//             convenience, and community. Your success is our priority, and we're
//             here to provide the workspace you need to thrive.
//           </p>
//           <h3 className="see-more-btn">See more</h3>
//         </div>
//         <div className="card-image">
//           <img
//             src="/path-to-future-office-image.jpg"
//             alt="Modern office space"
//           />
//         </div>
//       </div>

//       <div className="card">
//         <div className="card-content">
//           <h2 className="card-title">
//             <span className="subtitle">DISCOVER</span>
//             Amenities and Services
//           </h2>
//           <p className="card-description">
//             Enjoy a range of premium amenities designed to enhance your work
//             experience. From state-of-the-art conference rooms to relaxing
//             breakout areas, we've got everything you need for a productive day.
//           </p>
//           <h3 className="see-more-btn">See more</h3>
//         </div>
//         <div className="card-image">
//           <img src="/path-to-amenities-image.jpg" alt="Office amenities" />
//         </div>
//       </div>

//       <div className="card reversed">
//         <div className="card-content">
//           <h2 className="card-title">
//             <span className="subtitle">JOIN</span>
//             Our Community
//           </h2>
//           <p className="card-description">
//             Become part of a vibrant community of professionals. Network,
//             collaborate, and grow your business in an environment that fosters
//             innovation and success.
//           </p>
//           <h3 className="see-more-btn">See more</h3>
//         </div>
//         <div className="card-image">
//           <img src="/path-to-community-image.jpg" alt="Office community" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React from "react";
import "./Homepage.css";

const Categories = () => {
  return (
    <div className="cat-categories-showcase">
      <div className="cat-card">
        <div className="cat-card-content">
          <h2 className="cat-card-title">Meeting Rooms</h2>
          <p className="cat-card-description">
            Discover diverse range of meeting rooms designed to accommodate
            everything from small team huddles to large corporate meetings.
            Equipped with high-speed internet, state-of-the-art presentation
            tools and comfortable seating arrangements, these spaces are perfect
            for fostering collaboration and driving productivity. Whether you
            need a quiet space for interviews or a boardroom for crucial
            negotiations, meeting rooms offer the flexibility and
            professionalism you need to succeed.
          </p>
          <h3 className="cat-see-more-btn">See more</h3>
        </div>
        <div className="cat-card-image">
          <img
            src="https://images.unsplash.com/photo-1608658405784-4c3ef05ebcc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt="Meeting room"
          />
        </div>
      </div>

      <div className="cat-card reversed">
        <div className="cat-card-content">
          <h2 className="cat-card-title">Event Venues</h2>
          <p className="cat-card-description">
            Choose from a selection of stunning event venues, perfect for
            hosting everything from elegant weddings to high-energy conferences.
            Spaces available are equipped with the latest customizable layouts
            and dedicated event staff to ensure your event is a success. Whether
            you're planning a small gathering or a large-scale production our
            venues provide the perfect backdrop to make your event memorable.
            Let us help you bring your vision to life with spaces that inspire
            and elevate every occasion.
          </p>
          <h3 className="cat-see-more-btn">See more</h3>
        </div>
        <div className="cat-card-image">
          <img src="/path-to-event-venue-image.jpg" alt="Event venue" />
        </div>
      </div>

      <div className="cat-card">
        <div className="cat-card-content">
          <h2 className="cat-card-title">Creative Studios</h2>
          <p className="cat-card-description">
            Unleash your creativity in our versatile creative studios designed
            for artists, designers, and creators of all kinds. These spaces are
            equipped with high-quality lighting, soundproofing, and the tools
            you need to bring your ideas to life. Whether you're working on a
            photography shoot, recording a podcast, or collaborating on a design
            project, our studios provide the perfect environment to fuel your
            inspiration and productivity. Experience the freedom to create
            without limits in a space that’s tailored to your needs.
          </p>
          <h3 className="cat-see-more-btn">See more</h3>
        </div>
        <div className="cat-card-image">
          <img src="/path-to-creative-studio-image.jpg" alt="Creative studio" />
        </div>
      </div>

      <div className="cat-card reversed">
        <div className="cat-card-content">
          <h2 className="cat-card-title">Pop-Up Shops</h2>
          <p className="cat-card-description">
            Bring your brand to life in one of our dynamic pop-up shop spaces.
            These high-traffic locations are perfect for short-term retail
            experiences, product launches, and brand activations. With flexible
            lease terms and customizable interiors, you can create a unique and
            engaging environment that draws in customers and drives sales.
            Whether you're testing a new market or creating buzz around a
            product, our pop-up shops offer the perfect platform to showcase
            your brand in style.
          </p>
          <h3 className="cat-see-more-btn">See more</h3>
        </div>
        <div className="cat-card-image">
          <img src="/path-to-pop-up-shop-image.jpg" alt="Pop-up shop" />
        </div>
      </div>

      <div className="cat-card">
        <div className="cat-card-content">
          <h2 className="cat-card-title">Workshop Spaces</h2>
          <p className="cat-card-description">
            Enhance your educational programs with our specialized workshop
            spaces. Designed to accommodate training sessions, seminars, and
            hands-on learning experiences, these spaces are equipped with
            everything you need to deliver a successful event. From high-quality
            projectors to comfortable seating, our workshop spaces ensure a
            conducive environment for learning and development. Whether you're
            hosting a coding bootcamp, a craft workshop, or a corporate
            training, these spaces provide the tools and atmosphere you need to
            engage and inspire your participants.
          </p>
          <h3 className="cat-see-more-btn">See more</h3>
        </div>
        <div className="cat-card-image">
          <img src="/path-to-workshop-space-image.jpg" alt="Workshop space" />
        </div>
      </div>

      <div className="cat-card reversed">
        <div className="cat-card-content">
          <h2 className="cat-card-title">Outdoor Venues</h2>
          <p className="cat-card-description">
            Celebrate your special moments in the beauty of nature with our
            outdoor venues. Perfect for weddings, festivals, and open-air
            events, these spaces offer a unique blend of natural beauty and
            modern convenience. With stunning views, ample space, and flexible
            setups, our outdoor venues provide the ideal setting for any
            occasion. Whether you're planning a rustic wedding, a lively
            concert, or a serene retreat, our outdoor spaces offer a refreshing
            and memorable experience for you and your guests.
          </p>
          <h3 className="cat-see-more-btn">See more</h3>
        </div>
        <div className="cat-card-image">
          <img src="/path-to-outdoor-venue-image.jpg" alt="Outdoor venue" />
        </div>
      </div>

      <div className="cat-card">
        <div className="cat-card-content">
          <h2 className="cat-card-title">Private Dining Rooms</h2>
          <p className="cat-card-description">
            Enjoy an exclusive dining experience in one of our luxurious private
            dining rooms. Perfect for intimate gatherings, business dinners, or
            special celebrations, these spaces offer privacy, elegance, and
            personalized service. With options ranging from cozy, intimate
            spaces to grand, opulent settings, our private dining rooms cater to
            a variety of tastes and occasions. Indulge in gourmet cuisine,
            impeccable service, and a sophisticated atmosphere that will leave a
            lasting impression on your guests.
          </p>
          <h3 className="cat-see-more-btn">See more</h3>
        </div>
        <div className="cat-card-image">
          <img
            src="/path-to-private-dining-image.jpg"
            alt="Private dining room"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
