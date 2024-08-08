// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Homepage from "./components/Home_page/Homepage";
// import Login from "./components/Auth/Login";

// const App = () => {
//   return (
//     <div className="App">
//       <Homepage />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home_page/Homepage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
