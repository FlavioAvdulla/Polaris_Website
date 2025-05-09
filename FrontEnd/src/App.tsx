import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../src/components/context/ThemeContext"; // Import ThemeProvider
import Navbar_01 from "./components/Navbar/Navbar_01";
import Navbar_02 from "./components/Navbar/Navbar_02";
import Navbar_03 from "./components/Navbar/Navbar_03";
import Faq from "./components/Shadcn-components/Faq";
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
import Product_04 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_04";
import Product_05 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_05";
import Product_06 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_06";
import Shop from "./components/Pages/Shop/Shop";
import Blog from "./components/Pages/Blog/Blog";

import Latest_Products from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Latest_Products";
import Top_Rating from "./components/Home/ProductSection/DealsOfTheDay_Pages/TopRating/Top_Rating";
import Best_Selling from "./components/Home/ProductSection/DealsOfTheDay_Pages/BestSelling/Best_Selling";
import Computers from "./components/Home/ProductSection/shop_By_Categories/Computers/Computers";
import MobilesAndTablets from "./components/Home/ProductSection/shop_By_Categories/MobilesAndTablets/MobilesAndTablets";
import GameAccessories from "./components/Home/ProductSection/shop_By_Categories/GameAccessories/GameAccessories";
import CameraAndPhoto from "./components/Home/ProductSection/shop_By_Categories/CameraAndPhoto/CameraAndPhoto";
import Electronics from "./components/Home/ProductSection/shop_By_Categories/Electronics/Electronics";
import AudioAndHeadphones from "./components/Home/ProductSection/shop_By_Categories/AudioAndHeadphones/AudioAndHeadphones";

import Register from "./components/Pages/Register/Register";
import SignIn from "./components/Pages/SignIn/SignIn";

// Scroll
import ScrollManager from "./ScrollManager/ScrollManager";
import Cart from "./components/Pages/Cart/Cart";
import Favourites from "./components/Pages/Favourites/Favourites";
import Contacts from "./components/Pages/Contacts/Contacts";

import "./i18n";
import SignOut from "./components/Pages/SignOut/SignOut";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [favouriteQuantity, setFavouriteQuantity] = useState(0);

  return (
    <ThemeProvider> {/* Wrap entire app with ThemeProvider */}
      <>
        {showSignIn && (
          <SignIn
            setShowSignIn={setShowSignIn}
            setShowRegister={setShowRegister}
            setShowForgotPassword={setShowForgotPassword}
            setIsSignedIn={setIsSignedIn}
          />
        )}

        {showRegister && (
          <Register
            setShowRegister={setShowRegister}
            setShowSignIn={setShowSignIn}
          />
        )}

        {showForgotPassword && (
          <ForgotPassword
            setShowRegister={setShowRegister}
            setShowForgotPassword={setShowForgotPassword}
            setShowSignIn={setShowSignIn}
          />
        )}

        {showFaq && <Faq setShowFaq={setShowFaq} />}

        {showSignOut && (
          <SignOut
            setShowSignOut={setShowSignOut}
            setIsSignedIn={setIsSignedIn}
          />
        )}

        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Router>
            <ScrollManager />
            {/* Navigation Components */}
            <Navbar_01 setShowFaq={setShowFaq} />
            {/* Pass quantity state to Navbar_02 */}
            <Navbar_02
              cartQuantity={cartQuantity}
              favouriteQuantity={favouriteQuantity}
              setShowSignIn={setShowSignIn}
              isSignedIn={isSignedIn}
              setShowSignOut={setShowSignOut}
            />
            <Navbar_03 />
            {/* Main Routes */}
            <Routes>
              <Route path="/Product_01" element={<Product_01 />} />
              <Route path="/Product_02" element={<Product_02 />} />
              <Route path="/Product_03" element={<Product_03 />} />
              <Route path="/Product_04" element={<Product_04 />} />
              <Route path="/Product_05" element={<Product_05 />} />
              <Route path="/Product_06" element={<Product_06 />} />

              <Route path="/Shop" element={<Shop />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Contacts" element={<Contacts />} />

              <Route path="/Computers" element={<Computers />} />
              <Route path="/MobilesAndTablets" element={<MobilesAndTablets />} />
              <Route path="/GameAccessories" element={<GameAccessories />} />
              <Route path="/CameraAndPhoto" element={<CameraAndPhoto />} />
              <Route path="/Electronics" element={<Electronics />} />
              <Route
                path="/AudioAndHeadphones"
                element={<AudioAndHeadphones />}
              />
              <Route
                path="/Cart"
                element={<Cart setCartQuantity={setCartQuantity} />}
              />
              <Route
                path="/Favourites"
                element={
                  <Favourites setFavouriteQuantity={setFavouriteQuantity} />
                }
              />
              {/* Main Home Page */}
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
              >
                {/* Nested Routes for ProductSection_02 */}
                <Route index element={<Latest_Products />} />
                <Route
                  path="deals/latest-products"
                  element={<Latest_Products />}
                />
                <Route path="deals/top-rating" element={<Top_Rating />} />
                <Route path="deals/best-selling" element={<Best_Selling />} />
              </Route>
            </Routes>
            {/* Footer */}
            <Footer />
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;