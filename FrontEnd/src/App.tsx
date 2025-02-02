import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar_01 from "./components/Navbar/Navbar_01";
import Navbar_02 from "./components/Navbar/Navbar_02";
import Navbar_03 from "./components/Navbar/Navbar_03";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar_01 />
        <Navbar_02 />
        <Navbar_03 />
        <Carousel />
      </Router>
    </div>
  );
};

export default App;
