import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './AdminDashboard.css';

const TenantDashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tenant Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/manage-spaces" className="nav-link">Manage Spaces</Link>
            <Link to="/manage-users" className="nav-link">Manage Users</Link>
            <Link to="/manage-bookings" className="nav-link">Manage Bookings</Link>
    
          </Nav>
        </Container>
      </Navbar>
      <Container>
        {/* Use React Router's Outlet here if needed for nested routes */}
      </Container>
    </div>
  );
};

export default TenantDashboard;
