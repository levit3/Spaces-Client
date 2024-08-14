import React from "react";
import "./aboutUs.css";

// Feature component
// function Feature({ imageSrcSet, title, description }) {
//   return (
//     <div className="feature-container">
//       <img
//         loading="lazy"
//         srcSet={imageSrcSet}
//         className="feature-image"
//         alt={title}
//       />
//       <div className="feature-text-container">
//         <div className="feature-title">{title}</div>
//         <div className="feature-description">{description}</div>
//       </div>
//     </div>
//   );
// }

function Card({ title, children }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
}


function TeamMemberCard({ name, role, description, imageSrc }) {
  return (
    <div className="team-member-card">
      <img src={imageSrc} alt={name} className="team-member-image"/>
      <div className="team-member-name">{name}</div>
      <div className="team-member-role">{role}</div>
      <p className="team-member-description">{description}</p>
    </div>
  );
}

function About() {
  return (
    <>
      <div className="container">
        <div className="main-content">
          <div className="welcome-section">
            <h2 className="welcome-title">
              Welcome to Spaces for Rent where your perfect venue awaits.
            </h2>
            <p className="welcome-description">
              We are a passionate team dedicated to creating a platform that
              brings people together whether it's for meetings, celebrations,
              or creative collaborations.
            </p>
          </div>
          <div className="image-section">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=2000 2000w"
              className="main-image"
              alt="Space"
            />
          </div>
        </div>
      </div>

      <div className="cards-section">
        <Card title="Our Mission">
          Our mission is to connect space owners with those in need of unique
          environments, making it easier to find and book the perfect location
          for any occasion.
        </Card>
        <Card title="Our Vision">
          Our vision is to become the leading online marketplace for unique
          space rentals, where every event, meeting, or activity can find its
          ideal setting. We envision a world where people have access to diverse
          and inspiring spaces that enhance their experiences and bring their
          ideas to life.
        </Card>
        <Card title="Our Values">
          <ul className="section-list">
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency, building trust with our users.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously seek new and better
              ways to connect people with spaces.
            </li>
            <li>
              <strong>Customer Focus:</strong> We prioritize the needs and
              feedback of our users to enhance their experience.
            </li>
            <li>
              <strong>Community:</strong> We foster a sense of belonging and
              collaboration among space owners and renters.
            </li>
          </ul>
        </Card>
      </div>

      <div className="section-container bg-dark">
        <h2 className="section-title">Our Team</h2>
        <p className="section-text">
          Our dedicated team consists of experienced professionals in both
          front-end and back-end development, working together to build a robust
          and user-friendly platform.
        </p>
        <div className="team-grid">
          <TeamMemberCard
            name="Nicholas"
            role="Front-end and back-end Developer"
            imageSrc="https://via.placeholder.com/96"
            description="The developer played a crucial role in the space rental platform project by excelling in both frontend and backend development. They designed a polished and responsive user interface using React, featuring space listings, customizable search options, and a straightforward booking mechanism. On the backend, they built and refined APIs with Flask to handle data management, user authentication, and booking functionalities. Their ability to harmonize frontend features with backend operations resulted in an intuitive platform that enhanced user interaction and operational efficiency."
          />
          <TeamMemberCard
            name="Habib"
            role="Front-end and back-end Developer"
            imageSrc="https://via.placeholder.com/96"
            description="In the project to develop a comprehensive space rental platform, the developer excelled in both frontend and backend tasks, ensuring a cohesive and functional application. On the frontend, they designed and implemented a sleek user interface using React, which included features such as space listings, dynamic search filters, and an intuitive booking system. On the backend, they configured and optimized APIs with Flask to handle space data, manage user accounts, and process bookings. By seamlessly integrating frontend components with backend services, they ensured that users could effortlessly navigate the platform and complete transactions, effectively bridging the gap between user experience and server-side functionality."
          />
          <TeamMemberCard
            name="Favor"
            role="Front-end and back-end Developer"
            imageSrc="https://via.placeholder.com/96"
            description="For the space rental platform project, the developer skillfully handled both frontend and backend responsibilities, delivering a well-integrated and functional application. They created a visually appealing interface in React, with space listings, real-time search filters, and a streamlined booking system. On the backend, they developed and optimized Flask APIs to manage space data, user interactions, and booking transactions. Their effective integration of frontend design with backend processing provided a seamless user experience and reliable platform performance."
          />
          <TeamMemberCard
            name="Levi"
            role="Team Leader"
            imageSrc="https://via.placeholder.com/96"
            description="As the project leader for the space rental platform, they played a pivotal role in guiding the development process from conception to launch. They coordinated cross-functional teams, including frontend and backend developers, designers, and testers, to ensure timely delivery of key milestones. Their strategic vision drove the creation of a user-friendly interface and a robust backend infrastructure. By making critical decisions on technology stack, design principles, and project management methodologies, they ensured that the platform met both user needs and business objectives, while also fostering a collaborative and productive team environment."
          />
          <TeamMemberCard
            name="Benhin"
            role="Front-end and back-end Developer"
            imageSrc="https://via.placeholder.com/96"
            description="In the space rental platform project, the developer excelled across both frontend and backend domains, ensuring a cohesive and operational application. They implemented a refined user interface with React, featuring space listings, dynamic search capabilities, and an efficient booking system. On the backend, they set up and fine-tuned APIs using Flask to oversee space information, user management, and booking workflows. Their successful integration of frontend and backend elements facilitated a user-friendly experience and smooth transactional operations."
          />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 Spaces for Rent. All rights reserved.
          </p>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </div>
      </footer>
    </>
  );
}

export default About;
