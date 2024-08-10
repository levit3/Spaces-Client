import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Container, Form, InputGroup } from 'react-bootstrap';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  