import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";
import Homepage from "./components/Home_page/Homepage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import About from './aboutUs';
import ManageSpaces from "./TenantPage/ManageSpaces";
import TenantDashboard from "./TenantPage/TenantDashboard";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Homepage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/events",
      element: <EventList />,
    },
    {
      path: "/event/:id",
      element: <EventDetail />,
    },
    {
      path: "/space/:id",
      element: <SpaceDetails />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: '/manage-spaces',
      element: <ManageSpaces />
    },
    
    {
      path: '/dashboard',
      element: <TenantDashboard />
    }
  ]);

  return <RouterProvider router={router} />;
}


export default App;
