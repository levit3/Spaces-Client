import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventList from "./Pages/EventsList";
import EventDetail from "./Pages/EventDetail";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
