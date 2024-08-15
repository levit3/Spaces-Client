import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TenantDashboard.css";

const TenantDashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTenant, setIsTenant] = useState(false);
  const navigate = useNavigate();
  
  // Hardcoded user ID for testing
  const testUserId = 89;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user information using the hardcoded ID
        const userResponse = await fetch("/api/users/89");
        const userData = await userResponse.json();

        if (userData.role === 'tenant') {
          setIsTenant(true);
          
          try {
            // Fetch spaces for the hardcoded user ID
            const spacesResponse = await fetch(`/api/users/${testUserId}/spaces`);
            if (!spacesResponse.ok) {
              throw new Error(`HTTP error! status: ${spacesResponse.status}`);
            }
            const spacesData = await spacesResponse.json();
            console.log("Spaces fetched successfully:", spacesData);
            setSpaces(spacesData.spaces || []); // Adjust based on actual response structure
          } catch (error) {
            console.error("Error fetching spaces:", error);
          }
        } else {
          navigate("/404");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

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

  if (!isTenant) {
    return null; // This will be handled by the redirect
  }

  return (
    <div>
      
      <Link to="/add-space" className="add-space-button">Add Space</Link>
      <div className="spaces-list">
        <div className="filter-container">
          {/* Add search and category filters here if needed */}
        </div>
        <div className="spaces-container">
          {spaces.map((space) => (
            <div key={space.id} className="space-card">
              <div className="price-tag">${space.price_per_hour}/hour</div>
              <img
                src={
                  space.space_images && space.space_images.length > 0
                    ? space.space_images[0].image_url
                    : "https://via.placeholder.com/400x300?text=No+Image+Available"
                }
                alt={space.title || "Space Image"}
              />
              <div className="space-info">
                <h3>{space.title}</h3>
                <p>{space.location}</p>
                <p>{space.status}</p>
              </div>
              <div className="hover-content">
                <p>{space.description}</p>
                <button onClick={() => handleClick(space)}>Space Details</button>
                <button onClick={() => handleEdit(space)}>Edit Space</button>
                <button className="delete-button" onClick={() => handleDelete(space)}>
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
