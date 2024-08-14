import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Auth/AuthContext";
import Homepage from "./components/Home_page/Homepage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";
import EventCreation from "./components/EventCreation";
import SpaceForm from "./Pages/SpaceForm";
import PageNotFound from "./Pages/PageNotFound";
import About from "./aboutUs";
import Checkout from "./Pages/Checkout";
import "./App.css";
import Footer from "./components/Footer";
import BookingDetails from "./bookingDetails/BookingDetails";
import UserDashboard from "./UserDashboard/UserDashboard";
import SuccessfulPayment from "./Pages/SuccessfulPayment";
import Navbar from "./components/Navbar";
import AddSpacePage from './TenantPage/AddSpacePage';
import EditSpacePage from './TenantPage/EditSpacePage';
import TenantDashboard from "./TenantPage/TenantDashboard";
import ManageUsers from "./TenantPage/ManageUsers";

const AppContent = () => {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState([]);

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
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        <Route path="/events/new" element={<EventCreation />} />
        <Route path="/spaces/new" element={<SpaceForm />} />
        <Route path="/booking" element={<BookingDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dashboard" element={<UserDashboard user={user} />} />
        <Route path="/payment-success" element={<SuccessfulPayment />} />
        <Route path="/dashboard" element={<TenantDashboard />} />
        <Route path="/add-space" element={<AddSpacePage />} />
        <Route path="/edit-space/:id" element={<EditSpacePage />} />
        <Route path="/manage-users" element={<ManageUsers />} />

        <Route path="/about-us" element={<About />} />
 

      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AuthProvider>
      <Navbar />
      <AppContent />
    </AuthProvider>
  </Router>
);

export default App;