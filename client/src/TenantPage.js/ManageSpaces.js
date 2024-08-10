import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpaceForm from './SpaceForm';

const ManageSpaces = () => {
    const [spaces, setSpaces] = useState([]);
    const [selectedSpace, setSelectedSpace] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5555/api/users/7/')
            .then(response => setSpaces(response.data.spaces))
            .catch(error => console.error('Error fetching spaces:', error));
    }, []);

    const handleEdit = (space) => {
        setSelectedSpace(space);
    };

    const handleDelete = (id) => {
        axios.delete(`/api/spaces/${id}`)
            .then(() => setSpaces(spaces.filter(space => space.id !== id)))
            .catch(error => {
                console.error('Error deleting space:', error);
                alert('Failed to delete space. Please try again.');
            });
    };

    const handleAdd = () => {
        setSelectedSpace(null);
    };

    return (
        <div>
            <h1>Manage Spaces</h1>
            <button onClick={handleAdd}>Add New Space</button>


