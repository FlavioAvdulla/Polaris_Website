import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar_01 from "./components/Navbar/Navbar_01";
import Navbar_02 from "./components/Navbar/Navbar_02";
import Navbar_03 from "./components/Navbar/Navbar_03";
import Carousel from "./components/Carousel/Carousel";
import BenefitsPackage from "./components/Home/BenefitsPackage/BenefitsPackage";
import ProductSection_01 from "./components/Home/ProductSection/ProductSection_01";
import ProductSection_02 from "./components/Home/ProductSection/ProductSection_02";
import ProductSection_03 from "./components/Home/ProductSection/ProductSection_03";
import ProductSection_04 from "./components/Home/ProductSection/ProductSection_04";
import ProductSection_05 from "./components/Home/ProductSection/ProductSection_05";
import BannerSection from "./components/BannerSection/BannerSection";
import ProductSection_06 from "./components/Home/ProductSection/ProductSection_06";
import Footer from "./components/Home/Footer/Footer";

// Product Pages
import Product_01 from "./components/Home/ProductSection/DealsOfTheDay_Pages/Product_01";
import Product_02 from "./components/Home/ProductSection/DealsOfTheDay_Pages/Product_02";
import Product_03 from "./components/Home/ProductSection/DealsOfTheDay_Pages/Product_03";

// Scroll to top
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div className="">
      <Router>
      <ScrollToTop/>
        <Navbar_01 />
        <Navbar_02 />
        <Navbar_03 />
        <Routes>
          <Route path="/Product_01" element={<Product_01 />} />
          <Route path="/Product_02" element={<Product_02 />} />
          <Route path="/ProducT_03" element={<Product_03 />} />
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <BenefitsPackage />
                <ProductSection_01 />
                <ProductSection_02 />
                <ProductSection_03 />
                <ProductSection_04 />
                <ProductSection_05 />
                <BannerSection />
                <ProductSection_06 />
              </>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
