import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../UserDashboard/UserDashboard.css";
import "../components/SpaceDetails.css";
const API = process.env.REACT_APP_SERVER_API;

const TenantDashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const user_id = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : null;
  const [isTenant, setIsTenant] = useState(false);

  useEffect(() => {
    if (!user_id) {
      navigate("/login");
      return;
    }
    fetch(`${API}/api/users/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.role === "tenant") {
          setIsTenant(true);
          setSpaces(data.spaces);
          setLoading(false);
        } else {
          navigate("/404");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        navigate("/404");
      });
  }, []);

  const handleClick = (space) => {
    navigate(`/space/${space.id}`);
  };

  const handleEdit = (space) => {
    navigate(`/edit-space/${space.id}`);
  };

  const handleDelete = (space) => {
    fetch(`${API}/api/spaces/${space.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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

  const handleAdd = () => {
    navigate("/add-space");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">Fetching</div>
      </div>
    );
  }

  return (
    <div className="container-fluid user-dashboard mt-5">
      {/* Use container-fluid for full-width */}
      <div className="card bg-dark text-white mb-4 shadow-lg mx-5">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt={` Profile`}
              className="profile-picture rounded-circle me-3"
            />
            <div>
              <h2 className="card-title mb-1"></h2>
              <p className="card-text"></p>
            </div>
          </div>
          <div>
            <button
              className="btn btn-warning ms-3 shadow-sm"
              onClick={handleAdd}
            >
              Add Space
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <h2 className="py-3 text-center text-primary">Your Spaces</h2>
        </div>
      </div>
      <div className="spaces-container">
        {spaces.length > 0 ? (
          spaces.map((space, index) => (
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
                <button
                  className="learn-more-button"
                  onClick={() => handleEdit(space)}
                >
                  Edit Space
                </button>
                <button
                  className="learn-more-button"
                  onClick={() => handleDelete(space)}
                >
                  Delete Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <h4 className=" text-center text-white col-md-4 mb-3">
            No spaces available.
          </h4>
        )}
      </div>
    </div>
  );
};

export default TenantDashboard;
