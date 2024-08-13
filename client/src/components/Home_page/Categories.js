import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Categories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();
  const [hideFilter, setHideFilter] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const categories = [
    {
      title: "Meeting Rooms",
      description:
        "Discover diverse range of meeting rooms designed to accommodate everything from small team huddles to large corporate meetings. Equipped with high-speed internet, state-of-the-art presentation tools and comfortable seating arrangements, these spaces are perfect for fostering collaboration and driving productivity.",
      image:
        "https://media.istockphoto.com/id/459949333/photo/conference-room-tables-and-chairs.jpg?s=612x612&w=0&k=20&c=uyKJY7pC__MbDRWPoeT5Cnk0Q8bIkY2wm9vOgqWcMSQ=",
    },
    {
      title: "Event Venues",
      description:
        "Choose from a selection of stunning event venues, perfect for hosting everything from elegant weddings to high-energy conferences. Spaces available are equipped with the latest customizable layouts and dedicated event staff to ensure your event is a success.",
      image:
        "https://media.istockphoto.com/id/175559502/photo/classy-wedding-setting.jpg?s=612x612&w=0&k=20&c=8CluymAckSE1Qxluoy0f0pHR-2yKq7X-Qj5yTsbzMrs=",
    },
    {
      title: "Creative Studios",
      description:
        "Unleash your creativity in our versatile creative studios designed for artists, designers, and creators of all kinds. These spaces are equipped with high-quality lighting, soundproofing, and the tools you need to bring your ideas to life.",
      image:
        "https://media.istockphoto.com/id/641194956/photo/team-at-work.jpg?s=612x612&w=0&k=20&c=468MG1dbYdQCwO76jtcrvA_RSsimcamTnU8lE0ft56U=",
    },
    {
      title: "Pop-Up Shops",
      description:
        "Bring your brand to life in one of our dynamic pop-up shop spaces. These high-traffic locations are perfect for short-term retail experiences, product launches, and brand activations. With flexible lease terms and customizable interiors, you can create a unique and engaging environment.",
      image:
        "https://media.istockphoto.com/id/1349672500/photo/purchasing-coffee-from-an-independent-retailer.jpg?s=612x612&w=0&k=20&c=VGHPryohY6Iy83KdIiHyg3KLQKXSOSACOyakX0YU6H8=",
    },
    {
      title: "Workshop Spaces",
      description:
        "Enhance your educational programs with our specialized workshop spaces. Designed to accommodate training sessions, seminars and hands-on learning experiences, these spaces are equipped with everything you need to deliver a successful event.",
      image:
        "https://media.istockphoto.com/id/1340856781/photo/business-leader-giving-a-speech-on-a-seminar-in-board-room.jpg?s=612x612&w=0&k=20&c=X7YJZwl_Kw59OMcwmx_MYFhPOqX7qQxxtw4feRaHKTM=",
    },
    {
      title: "Outdoor Venues",
      description:
        "Celebrate your special moments in the beauty of nature with our outdoor venues. Perfect for weddings, festivals, and open-air events, these spaces offer a unique blend of natural beauty and modern convenience.",
      image:
        "https://media.istockphoto.com/id/484320888/photo/small-amphitheatre.jpg?s=612x612&w=0&k=20&c=MN_4hv1gf_ww97TmwxXpakBGbLvN7tn5C4YUQjUEa3c=",
    },
    {
      title: "Private Dining Rooms",
      description:
        "Enjoy an exclusive dining experience in one of our luxurious private dining rooms. Perfect for intimate gatherings, business dinners, or special celebrations, these spaces offer privacy, elegance, and personalized service.",
      image:
        "https://media.istockphoto.com/id/590034882/photo/restaurant-table-with-food.jpg?s=612x612&w=0&k=20&c=ZgVIAKS1s10FiQBLvmmgHXSwoLvMHWa7K4Tla8JZcmI=",
    },
  ];

  const handleSeeMoreClick = (category) => {
    setHideFilter(true);
    navigate("/spaces", { state: { category } });
  };

  return (
    <div className="cat-categories-showcase">
      {categories.map((category, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`cat-card ${index % 2 !== 0 ? "reversed" : ""}`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="cat-card-content">
            <h2 className="cat-card-title">{category.title}</h2>
            <p className="cat-card-description">{category.description}</p>
            <button
              className="cat-see-more-btn"
              onClick={() => handleSeeMoreClick(category.title)}
            >
              See more
            </button>
          </div>
          <div
            className={`cat-card-image ${
              hoveredCard === index ? "hovered" : ""
            }`}
          >
            <img src={category.image} alt={category.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
