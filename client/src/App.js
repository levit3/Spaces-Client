import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider,/*useAuth*/ } from "./components/Auth/AuthContext";
import Homepage from "./components/Home_page/Homepage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";
import EventCreation from "./components/EventCreation";
import BookingDetails from "./bookingDetails/BookingDetails";
import About from "./aboutUs.jsx";

import "./App.css";

const AppContent = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Navbar /> */}
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
        <Route path="create-event" element={<EventCreation />}/>
        <Route path="/bookingdetails" element={<BookingDetails />} />
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

