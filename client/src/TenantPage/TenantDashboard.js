import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './TenantDashboard.css'; 

const TenantDashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate=useNavigate()
  const [loading, setLoading] = useState(true)

  // const user_id = localStorage.getItem("user_id");


  useEffect(() => {
    fetch("/api/users/46")
      .then((response) => response.json())
      .then((data) => {
        setSpaces(data.spaces);
        console.log(data)
        setLoading(false);

      })
      .catch((error) => console.error("Error fetching spaces:", error));
  }, []);
   
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleAdd=(space)=>{
    console.log (`Space with ID ${space.id} clicked`);
    navigate(`/add-space/${space.id}`)
  }
  
  const handleClick = (space) => {
    console.log (`Space with ID ${space.id} clicked`);
    navigate(`/space/${space.id}`)
  }
  const handleEdit= (space) => {
    console.log (`Space with ID ${space.id} clicked`);
    navigate(`/edit-space/${space.id}`)
  }
  const handleDelete= (space) => {
    console.log (`Space with ID ${space.id} clicked`);
    navigate(`/delete-space/${space.id}`)
  }
  if (loading) {
    return <div>Loading spaces...</div>;
  }

  return (
    <div className="spaces-list">
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
         
        </select>
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
              alt={space.title}
            />
            <div className="space-info">
              <h3>{space.title}</h3>
              <p>{space.location}</p>
              <p>{space.status}</p>
            </div>

            {/* <div className="hover-content">
              <p>{space.description}</p>
              <button onClick={()=>handleClick(space)} > Space Details</button>
              <button onClick={()=>handleEdit(space)} > Edit Space</button>
              <button onClick={()=>handleDelete(space)} > Delete Details</button>
              <button onClick={()=>handleAdd(space)} > Add Space</button>
            
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantDashboard;
