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
            {spaces.map(space => (
                <div key={space.id}>
                    <h2>{space.title}</h2>
                    <p>{space.location}</p>
                    <button onClick={() => handleEdit(space)}>Edit</button>

                    <SpaceForm space={selectedSpace} onClose={() => setSelectedSpace(null)} onSuccess={space => {
                if (selectedSpace) {
                    setSpaces(spaces.map(s => s.id === space.id ? space : s));
                } else {
                    setSpaces([...spaces, space]);
                }
                setSelectedSpace(null);
            }} />

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Price per Hour</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>


