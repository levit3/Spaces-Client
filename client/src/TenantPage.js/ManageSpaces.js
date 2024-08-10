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


