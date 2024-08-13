// src/AvailableSpaces.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AvailableSpaces.css'; // Custom CSS for styling
import DeleteSpace from './DeleteSpace';

const AvailableSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/spaces')
      .then(response => response.json())
      .then(data => setSpaces(data));
  }, []);

  const filteredSpaces = spaces.filter(space =>
    space.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="available-spaces">
      <h2>Available Spaces</h2>
      <input
        type="text"
        placeholder="Search spaces..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="spaces-list">
        {filteredSpaces.length > 0 ? (
          filteredSpaces.map(space => (
            <div key={space.id} className="space-card">
              <h3>{space.title}</h3>
              <p>{space.description}</p>
              <Link to={`/space/${space.id}`}>View Details</Link>
            </div>
            
          ))
        ) : (
          <p>No spaces available.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableSpaces;
