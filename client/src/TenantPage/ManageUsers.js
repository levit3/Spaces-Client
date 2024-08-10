import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Container, Form, InputGroup } from 'react-bootstrap';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    useEffect(() => {
        // Fetch users from API
        axios.get('/api/users')
          .then(response => setUsers(response.data))
          .catch(error => console.error('Error fetching users:', error));
      }, []);
      const handleAddUser = (user) => {
        axios.post('/api/users', user)
          .then(response => {
            setUsers([...users, response.data]);
            resetForm();
          })
          .catch(error => console.error('Error adding user:', error));
      };
      const handleUpdateUser = (id, user) => {
        axios.put(`/api/users/${id}`, user)
          .then(response => {
            setUsers(users.map(u => u.id === id ? response.data : u));
            resetForm();
          })
          .catch(error => console.error('Error updating user:', error));
      };
      const handleDeleteUser = (id) => {
        axios.delete(`/api/users/${id}`)
          .then(() => setUsers(users.filter(user => user.id !== id)))
          .catch(error => console.error('Error deleting user:', error));
      };
      const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      handleUpdateUser(editingUser.id, formData);
    } else {
      handleAddUser(formData);
    }
  };
    
  