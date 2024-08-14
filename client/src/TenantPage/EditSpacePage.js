import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpaceForm from './SpaceForm';

const EditSpacePage = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        const response = await fetch(`/api/spaces/${id}`);
        if  (!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`);}
        const data = await response.json();
        setSpace(data);
      } catch (error) {
        console.error('Error fetching space:', error);
      }
    };
    fetchSpace();
  },[id]);
  const handleSuccess = (data) => { 
    console.log('Space updated successfully:', data);
  };


  return (
    <div>
      <h1>Edit Space</h1>
      {space ? (
        <SpaceForm space={space} onSuccess={handleSuccess} onClose={() => {/* handle close */}} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditSpacePage;