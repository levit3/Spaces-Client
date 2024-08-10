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

  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData({name:user.name, email:user.email,role:user.role});
  };
  const resetForm = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', role: '' });
  };
  <Container>
  <h2>Manage Users</h2>
  <Button variant="primary" onClick={resetForm}>Add User</Button>
  <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            name="role"
            value={formData.role}
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editingUser ? 'Update User' : 'Add User'}
        </Button>
        <Button variant="secondary" onClick={resetForm} className="ms-2">Cancel</Button>
      </Form>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
           
          </tr>
        </thead>
        <tbody>


    
  