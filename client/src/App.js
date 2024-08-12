import React, { useEffect, useState } from "react";
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
import UserDashboard from "./UserDashboard/UserDashboard";

const AppContent = () => {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState([])

  

  

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Homepage />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        <Route path="/about" element={<About />} />
        
        <Route 
          path="/dashboard"
          element={
          <>
          <Navbar/>
          <UserDashboard user={user} />
          </>}
          >
          
          </Route>
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
