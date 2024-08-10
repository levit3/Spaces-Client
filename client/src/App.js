import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";
import SpaceDetails from "./components/SpaceDetails";

function App() {
  const router = createBrowserRouter([
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
import EventCreation from "./components/EventCreation";

const App = () => {
  return (
    <div className="App">
      <EventCreation />
    </div>
  );
};

export default App;
