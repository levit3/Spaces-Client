import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider /*useAuth*/ } from "./components/Auth/AuthContext";
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
import SuccessfulPayment from "./Pages/SuccessfulPayment";
import "./App.css";
import Footer from "./components/Footer";

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
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<SuccessfulPayment />} />
        <Route path="*" element={<PageNotFound />} />
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
