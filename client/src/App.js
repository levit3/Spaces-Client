import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Auth/AuthContext";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import Homepage from "./components/Home_page/Homepage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Navbar";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";
import EventCreation from "./components/EventCreation";
import SpacesList from "./components/SpaceLists";
import About from "./aboutUs";
import "./App.css";

const AppContent = () => {
  const { isLoggedIn } = useAuth();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
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
        <Route path="/spaces/:category" element={<SpacesList />} />
        <Route
          path="/spaces"
          element={
            <>
              <Navbar />
              <SpacesList />
            </>
          }
        />
        <Route
          path="/space/:id"
          element={
            <>
              <Navbar />
              <SpaceDetails />
            </>
          }
        />
        {/* <Route
          path="/space/:id"
          element={isLoggedIn ? <SpaceDetails /> : <Navigate to="/login" />}
        /> */}
        <Route path="/about" element={<About />} />
        <Route path="event" element={<EventCreation />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  </Router>
);

export default App;
