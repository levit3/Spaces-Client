import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Auth/AuthContext";
import Homepage from "./components/Home_page/Homepage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Navbar";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";
import About from "./aboutUs";
import "./App.css";
import AddSpacePage from './TenantPage/AddSpacePage';
import EditSpacePage from './TenantPage/EditSpacePage';
import TenantDashboard from "./TenantPage/TenantDashboard";
import ManageUsers from "./TenantPage/ManageUsers";

const AppContent = () => {
  const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //   return <Login />;
  // }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        <Route path="/dashboard" element={<TenantDashboard />} />
        <Route path="/add-space" element={<AddSpacePage />} />
        <Route path="/editspace/:id" element={<EditSpacePage />} />
        <Route path="/manage-users" element={<ManageUsers />} />

        <Route path="/about-us" element={<About />} />
 

      </Routes>
    </>
  );
};



const App = () => (
  <Router>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </Router>
);

export default App;