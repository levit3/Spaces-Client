import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpaceForm from './SpaceForm';

const ManageSpaces = () => {
    const [spaces, setSpaces] = useState([]);
    const [selectedSpace, setSelectedSpace] = useState(null);