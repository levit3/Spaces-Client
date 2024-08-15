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
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";
import EventCreation from "./components/EventCreation";
import SpacesList from "./components/SpaceLists";
import About from "./aboutUs";
import Checkout from "./Pages/Checkout";
import "./App.css";
import Footer from "./components/Footer";
import BookingDetails from "./bookingDetails/BookingDetails";
import Navbar from "./components/Navbar";
import SpaceForm from "./TenantPage/SpaceForm";
import UserDashboard from "./UserDashboard/UserDashboard";
import SuccessfulPayment from "./Pages/SuccessfulPayment";
import PageNotFound from "./Pages/PageNotFound";
import AddSpacePage from "./TenantPage/AddSpacePage";
import EditSpacePage from "./TenantPage/EditSpacePage";
import TenantDashboard from "./TenantPage/TenantDashboard";
import ManageUsers from "./TenantPage/ManageUsers";

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
        <Route path="/events/new" element={<EventCreation />} />
        <Route path="/spaces/new" element={<SpaceForm />} />
        <Route path="/booking" element={<BookingDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/spaces/:category" element={<SpacesList />} />
        <Route path="/payment-success" element={<SuccessfulPayment />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<EventCreation />} />
        <Route path="/tenantdashboard" element={<TenantDashboard />} />
        <Route path="/add-space" element={<AddSpacePage />} />
        <Route path="/edit-space/:id" element={<EditSpacePage />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="*" element={<PageNotFound />} />
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
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <AppContent />
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  </Router>
);

export default App;
