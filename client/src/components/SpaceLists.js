// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./SpaceDetails.css";

// const SpacesList = () => {
//   const [spaces, setSpaces] = useState([]);
//   const [filteredSpaces, setFilteredSpaces] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [categories, setCategories] = useState(["All"]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:5555/api/spaces")
//       .then((response) => response.json())
//       .then((data) => {
//         setSpaces(data);
//         setFilteredSpaces(data);

//         const uniqueCategories = [
//           "Filter by All",
//           ...new Set(data.map((space) => space.category)),
//         ];
//         setCategories(uniqueCategories);
//       })
//       .catch((error) => console.error("Error fetching spaces:", error));
//   }, []);

//   useEffect(() => {
//     const results = spaces.filter(
//       (space) =>
//         space.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedCategory === "All" || space.category === selectedCategory)
//     );
//     setFilteredSpaces(results);
//   }, [searchTerm, selectedCategory, spaces]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div className="spaces-list">
//       <div className="filter-container">
//         <input
//           type="text"
//           placeholder="Search spaces..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//         <select
//           placeholder="Category"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="category-select"
//         >
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="spaces-container">
//         {filteredSpaces.map((space) => (
//           <div key={space.id} className="space-card">
//             <div className="price-tag">${space.price_per_hour}/hour</div>
//             <img
//               src={
//                 space.space_images && space.space_images.length > 0
//                   ? space.space_images[0].image_url
//                   : "https://via.placeholder.com/400x300?text=No+Image+Available"
//               }
//               alt={space.title}
//             />
//             <div className="space-info">
//               <h5>{space.title}</h5>
//               <p>
//                 <span>Location:</span>
//                 <span>{space.location}</span>
//               </p>
//               <p>
//                 <span>Status:</span>
//                 <span>{space.status}</span>
//               </p>
//             </div>
//             <div className="hover-content">
//               <p>{space.description}</p>
//               <Link to="/space/:id" className="learn-more-button">
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpacesList;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SpaceDetails.css";

const SpacesList = () => {
  const [spaces, setSpaces] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/api/spaces")
      .then((response) => response.json())
      .then((data) => {
        setSpaces(data);
        setFilteredSpaces(data);

        const uniqueCategories = [
          "Filter by All",
          ...new Set(data.map((space) => space.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching spaces:", error));
  }, []);

  useEffect(() => {
    const results = spaces.filter(
      (space) =>
        space.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || space.category === selectedCategory)
    );
    setFilteredSpaces(results);
  }, [searchTerm, selectedCategory, spaces]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="spaces-list-container">
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search spaces..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="spaces-container">
        {filteredSpaces.map((space) => (
          <div key={space.id} className="space-card">
            <div className="price-tag">${space.price_per_hour}/hour</div>
            <img
              src={
                space.space_images && space.space_images.length > 0
                  ? space.space_images[0].image_url
                  : "https://via.placeholder.com/400x300?text=No+Image+Available"
              }
              alt={space.title}
              className="space-image"
            />

            <div className="hover-content">
              <h3>{space.title}</h3>
              <p>{`Location: ${space.location}`}</p>

              <p>{`Status: ${space.status}`}</p>
              <p>{space.description}</p>
              <Link to={`/space/${space.id}`} className="learn-more-button">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpacesList;
