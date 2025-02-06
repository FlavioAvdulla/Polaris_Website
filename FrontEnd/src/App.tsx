import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar_01 from "./components/Navbar/Navbar_01";
import Navbar_02 from "./components/Navbar/Navbar_02";
import Navbar_03 from "./components/Navbar/Navbar_03";
import Carousel from "./components/Carousel/Carousel";
import BenefitsPackage from "./components/BenefitsPackage/BenefitsPackage";
import ProductSection_01 from "./components/ProductSection/ProductSection_01";
import ProductSection_02 from "./components/ProductSection/ProductSection_02";
import ProductSection_03 from "./components/ProductSection/ProductSection_03";
import ProductSection_04 from "./components/ProductSection/ProductSection_04";
import ProductSection_05 from "./components/ProductSection/ProductSection_05";
import BannerSection from "./components/BannerSection/BannerSection";
import ProductSection_06 from "./components/ProductSection/ProductSection_06";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar_01 />
        <Navbar_02 />
        <Navbar_03 />
        <Carousel />
        <BenefitsPackage />
        <ProductSection_01 />
        <ProductSection_02 />
        <ProductSection_03 />
        <ProductSection_04 />
        <ProductSection_05 />
        <BannerSection />
        <ProductSection_06 />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
