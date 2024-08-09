import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";
import Homepage from "./components/Home_page/Homepage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
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
  ]);
  return <RouterProvider router={router} />;
}


export default App;
