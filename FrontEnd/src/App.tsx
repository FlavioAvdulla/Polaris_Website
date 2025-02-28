import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar_01 from "./components/Navbar/Navbar_01";
import Navbar_02 from "./components/Navbar/Navbar_02";
import Navbar_03 from "./components/Navbar/Navbar_03";
import Carousel from "./components/Home/Carousel/Carousel";
import BenefitsPackage from "./components/Home/BenefitsPackage/BenefitsPackage";
import ProductSection_01 from "./components/Home/ProductSection/ProductSection_01";
import ProductSection_02 from "./components/Home/ProductSection/ProductSection_02";
import ProductSection_03 from "./components/Home/ProductSection/ProductSection_03";
import ProductSection_04 from "./components/Home/ProductSection/ProductSection_04";
import ProductSection_05 from "./components/Home/ProductSection/ProductSection_05";
import BannerSection from "./components/Home/BannerSection/BannerSection";
import ProductSection_06 from "./components/Home/ProductSection/ProductSection_06";
import Footer from "./components/Home/Footer/Footer";

// Pages
import Product_01 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_01";
import Product_02 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_02";
import Product_03 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_03";
import Shop from "./components/Pages/Shop/Shop";
import Blog from "./components/Pages/Blog/Blog";
import Computers from "./components/Pages/Computers/Computers";

import Latest_Products from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Latest_Products";
import Top_Rating from "./components/Home/ProductSection/DealsOfTheDay_Pages/TopRating/Top_Rating";
import Best_Selling from "./components/Home/ProductSection/DealsOfTheDay_Pages/BestSelling/Best_Selling";

// Scroll
import ScrollManager from "@/ScrollManager/ScrollManager";

const App = () => {
  return (
    <div>
      <Router>
      <ScrollManager />
        {/* Navigation Components */}
        <Navbar_01 />
        <Navbar_02 />
        <Navbar_03 />
        {/* Main Routes */}
        <Routes>
          <Route path="/Product_01" element={<Product_01 />} />
          <Route path="/Product_02" element={<Product_02 />} />
          <Route path="/Product_03" element={<Product_03 />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Computers" element={<Computers />} />
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <BenefitsPackage />
                <ProductSection_01 />
                <ProductSection_02 /> {/* Includes nested routes */}
                <ProductSection_03 />
                <ProductSection_04 />
                <ProductSection_05 />
                <BannerSection />
                <ProductSection_06 />
              </>
            }
          >
            {/* Nested Routes for ProductSection_02 */}
            <Route index element={<Latest_Products />} /> {/* Default for / */}
            <Route path="deals/latest-products" element={<Latest_Products />} />
            <Route path="deals/top-rating" element={<Top_Rating />} />
            <Route path="deals/best-selling" element={<Best_Selling />} />
          </Route>
        </Routes>
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
