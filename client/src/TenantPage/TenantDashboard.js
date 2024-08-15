import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TenantDashboard.css";

const TenantDashboard = () => {
  const [spaces, setSpaces] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const user_id = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : null;

  useEffect(() => {
    fetch(`/api/users/${user_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Space updated successfully:", data);
        setSpaces(data.spaces);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching spaces:", error));
  }, []);

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  const handleClick = (space) => {
    navigate(`/space/${space.id}`);
  };

  const handleEdit = (space) => {
    navigate(`/edit-space/${space.id}`);
  };

  const handleDelete = (space) => {
    fetch(`/api/spaces/${space.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setSpaces((prevSpaces) =>
            prevSpaces.filter((item) => item.id !== space.id)
          );
        } else {
          console.error(`Failed to delete space with ID ${space.id}`);
        }
      })
      .catch((error) => console.error("Error deleting space:", error));
  };

  if (loading) {
    return <div>Loading spaces...</div>;
  }

  return (
    <div>
      <div className="spaces-list">
        <div className="filter-container">
          {/* <input
            type="text"
            placeholder="Search spaces..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          /> */}
          {/* <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            Populate categories if needed */}
          {/* </select> */}
        </div>
        <div className="spaces-container">
          {spaces.map((space) => (
            <div key={space.id} className="tenant-space-card">
              <div className="price-tag">${space.price_per_hour}/hour</div>
              <img
                src={
                  space.space_images && space.space_images.length > 0
                    ? space.space_images[0].image_url
                    : "https://via.placeholder.com/400x300?text=No+Image+Available"
                }
                alt={space.title}
              />
              <div className="space-info">
                <h3>{space.title}</h3>
                <p>{space.location}</p>
                <p>{space.status}</p>
              </div>

              <div className="hover-content">
                <p>{space.description}</p>
                <button className="button" onClick={() => handleClick(space)}>
                  Space Details
                </button>
                <button className="button" onClick={() => handleEdit(space)}>
                  Edit Space
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(space)}
                >
                  Delete Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
