import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SpaceDetails.css";
const API = process.env.REACT_APP_SERVER_API;

const SpacesList = () => {
  const [spaces, setSpaces] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  let categoryFromState = location.state?.category?.toLowerCase() || "all";

  if (categoryFromState.endsWith("s")) {
    categoryFromState = categoryFromState.slice(0, -1);
  }

  console.log("Normalized Category from state:", categoryFromState);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/api/spaces`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched spaces data:", data);
        setSpaces(data);
        setFilteredSpaces(data);

        const uniqueCategories = [
          "all",
          ...new Set(data.map((space) => space.category.toLowerCase())),
        ];
        setCategories(uniqueCategories);

        setSelectedCategory(categoryFromState);
      })
      .catch((error) => console.error("Error fetching spaces:", error))
      .finally(() => setLoading(false));
  }, [categoryFromState]);

  useEffect(() => {
    const results = spaces.filter((space) => {
      return (
        space.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" ||
          space.category.toLowerCase() === selectedCategory)
      );
    });
    console.log("Filtering spaces for category:", selectedCategory);
    console.log("Filtered spaces:", results);
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

      {loading ? (
        <div className="spinner">Fetching</div>
      ) : (
        <div className="spaces-container">
          {filteredSpaces.length > 0 ? (
            filteredSpaces.map((space) => (
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
                  <p>{`Category: ${space.category}`}</p>
                  <p>{`Status: ${space.status}`}</p>
                  <p>{space.description}</p>
                  <Link to={`/space/${space.id}`} className="learn-more-button">
                    Learn More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No spaces found under this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SpacesList;
