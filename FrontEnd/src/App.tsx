import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar_01 from "./components/Navbar/Navbar_01";
import Navbar_02 from "./components/Navbar/Navbar_02";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar_01 />
        <Navbar_02 />
      </Router>
    </div>
  );
};

export default App;
