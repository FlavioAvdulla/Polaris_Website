// Importing various component files from their respective paths
import AudioAndHeadphones from "./components/Home/ProductSection/shop_By_Categories/AudioAndHeadphones/AudioAndHeadphones";
import MobilesAndTablets from "./components/Home/ProductSection/shop_By_Categories/MobilesAndTablets/MobilesAndTablets";
import Latest_Products from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Latest_Products";
import GameAccessories from "./components/Home/ProductSection/shop_By_Categories/GameAccessories/GameAccessories";
import CameraAndPhoto from "./components/Home/ProductSection/shop_By_Categories/CameraAndPhoto/CameraAndPhoto";
import Best_Selling from "./components/Home/ProductSection/DealsOfTheDay_Pages/BestSelling/Best_Selling";
import Product_01 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_01";
import Product_02 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_02";
import Product_03 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_03";
import Product_04 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_04";
import Product_05 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_05";
import Product_06 from "./components/Home/ProductSection/DealsOfTheDay_Pages/LatestProducts/Product_06";
import Electronics from "./components/Home/ProductSection/shop_By_Categories/Electronics/Electronics";
import Top_Rating from "./components/Home/ProductSection/DealsOfTheDay_Pages/TopRating/Top_Rating";
import Computers from "./components/Home/ProductSection/shop_By_Categories/Computers/Computers";
import ProductSection_01 from "./components/Home/ProductSection/ProductSection_01";
import ProductSection_02 from "./components/Home/ProductSection/ProductSection_02";
import ProductSection_03 from "./components/Home/ProductSection/ProductSection_03";
import ProductSection_04 from "./components/Home/ProductSection/ProductSection_04";
import ProductSection_05 from "./components/Home/ProductSection/ProductSection_05";
import ProductSection_06 from "./components/Home/ProductSection/ProductSection_06";
import BenefitsPackage from "./components/Home/BenefitsPackage/BenefitsPackage";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import BannerSection from "./components/Home/BannerSection/BannerSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../src/components/context/ThemeContext";
import SmartPhones from "./components/Navbar/Categories/SmartPhones";
import Product_32 from "./components/Home/otherProducts/Product_32";
import Product_33 from "./components/Home/otherProducts/Product_33";
import Product_34 from "./components/Home/otherProducts/Product_34";
import Product_35 from "./components/Home/otherProducts/Product_35";
import Product_36 from "./components/Home/otherProducts/Product_36";
import Product_37 from "./components/Home/otherProducts/Product_37";
import Product_40 from "./components/Home/otherProducts/Product_40";
import Product_41 from "./components/Home/otherProducts/Product_41";
import Product_42 from "./components/Home/otherProducts/Product_42";
import Product_43 from "./components/Home/otherProducts/Product_43";
import Product_44 from "./components/Home/otherProducts/Product_44";
import Product_45 from "./components/Home/otherProducts/Product_45";
import Product_46 from "./components/Home/otherProducts/Product_46";
import Product_47 from "./components/Home/otherProducts/Product_47";
import Product_48 from "./components/Home/otherProducts/Product_48";
import TrackOrder from "./components/Pages/TrackOrder/TrackOrder";
import Favourites from "./components/Pages/Favourites/Favourites";
import Speakers from "./components/Navbar/Categories/Speakers";
import ChatBox from "./components/Shadcn-components/ChatBox";
import Contacts from "./components/Pages/Contacts/Contacts";
import Register from "./components/Pages/Register/Register";
import ScrollManager from "./ScrollManager/ScrollManager";
import Carousel from "./components/Home/Carousel/Carousel";
import SignOut from "./components/Pages/SignOut/SignOut";
import SignIn from "./components/Pages/SignIn/SignIn";
import Navbar_01 from "./components/Navbar/Navbar_01";
import Navbar_02 from "./components/Navbar/Navbar_02";
import Navbar_03 from "./components/Navbar/Navbar_03";
import Footer from "./components/Home/Footer/Footer";
import Faq from "./components/Shadcn-components/Faq";
import Cart from "./components/Pages/Cart/Cart";
import Shop from "./components/Pages/Shop/Shop";
import Blog from "./components/Pages/Blog/Blog";
import React, { useState } from "react";
import "./i18n";

// Main App component
const App = () => {
  // State management for various UI components and user status
  const [showRegister, setShowRegister] = useState(false); // Controls Register modal visibility
  const [showSignIn, setShowSignIn] = useState(false); // Controls SignIn modal visibility
  const [showSignOut, setShowSignOut] = useState(false); // Controls SignOut modal visibility
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Controls ForgotPassword modal visibility
  const [isSignedIn, setIsSignedIn] = useState(false); // Tracks user authentication status
  const [showFaq, setShowFaq] = useState(false); // Controls FAQ modal visibility
  const [cartQuantity, setCartQuantity] = useState(0); // Tracks number of items in cart
  const [favouriteQuantity, setFavouriteQuantity] = useState(0); // Tracks number of favorite items

  return (
    // ThemeProvider context for managing theme across the application
    <ThemeProvider>
      {/* ChatBox component that appears on all pages */}
      <ChatBox/>
      {/* Fragment to group multiple elements */}
      <>
      {/* Conditional rendering for SignIn modal */}
        {showSignIn && (
          <SignIn
            setShowSignIn={setShowSignIn}
            setShowRegister={setShowRegister}
            setShowForgotPassword={setShowForgotPassword}
            setIsSignedIn={setIsSignedIn}
          />
        )}
        {/* Conditional rendering for Register modal */}
        {showRegister && (
          <Register
            setShowRegister={setShowRegister}
            setShowSignIn={setShowSignIn}
          />
        )}
        {/* Conditional rendering for ForgotPassword modal */}
        {showForgotPassword && (
          <ForgotPassword
            setShowRegister={setShowRegister}
            setShowForgotPassword={setShowForgotPassword}
            setShowSignIn={setShowSignIn}
          />
        )}
        {/* Conditional rendering for FAQ modal */}
        {showFaq && <Faq setShowFaq={setShowFaq} />}
        {/* Conditional rendering for SignOut modal */}
        {showSignOut && (
          <SignOut
            setShowSignOut={setShowSignOut}
            setIsSignedIn={setIsSignedIn}
          />
        )}
        {/* Main container with theme-aware background */}
        <div className="min-h-screen bg-white transition-colors duration-200 -z-10
                        dark:bg-darkColor">
          {/* Router component for handling navigation */}
          <Router>
            {/* Component to manage scroll behavior */}
            <ScrollManager />
            {/* Navigation Components */}
            <Navbar_01 setShowFaq={setShowFaq} />
            {/* Second navbar with cart/favorites counts and auth controls */}
            <Navbar_02
              cartQuantity={cartQuantity}
              favouriteQuantity={favouriteQuantity}
              setShowSignIn={setShowSignIn}
              isSignedIn={isSignedIn}
              setShowSignOut={setShowSignOut}/>
            {/* Third navbar component */}
            <Navbar_03 />
            
            {/* Route definitions for the application */}
            <Routes>
              {/* Individual product pages */}
              <Route path="/Product_01" element={<Product_01 />} />
              <Route path="/Product_02" element={<Product_02 />} />
              <Route path="/Product_03" element={<Product_03 />} />
              <Route path="/Product_04" element={<Product_04 />} />
              <Route path="/Product_05" element={<Product_05 />} />
              <Route path="/Product_06" element={<Product_06 />} />
              <Route path="/Product_32" element={<Product_32 />} />
              <Route path="/Product_33" element={<Product_33 />} />
              <Route path="/Product_34" element={<Product_34 />} />
              <Route path="/Product_35" element={<Product_35 />} />
              <Route path="/Product_36" element={<Product_36 />} />
              <Route path="/Product_37" element={<Product_37 />} />
              <Route path="/Product_40" element={<Product_40 />} />
              <Route path="/Product_41" element={<Product_41 />} />
              <Route path="/Product_42" element={<Product_42 />} />
              <Route path="/Product_43" element={<Product_43 />} />
              <Route path="/Product_44" element={<Product_44 />} />
              <Route path="/Product_45" element={<Product_45 />} />
              <Route path="/Product_46" element={<Product_46 />} />
              <Route path="/Product_47" element={<Product_47 />} />
              <Route path="/Product_48" element={<Product_48 />} />

              {/* Main section pages */}
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Contacts" element={<Contacts />} />
              {/* Category pages */}
              <Route path="/Computers" element={<Computers />} />
              <Route path="/MobilesAndTablets" element={<MobilesAndTablets />} />
              <Route path="/GameAccessories" element={<GameAccessories />} />
              <Route path="/CameraAndPhoto" element={<CameraAndPhoto />} />
              <Route path="/Electronics" element={<Electronics />} />
              <Route path="/AudioAndHeadphones" element={<AudioAndHeadphones />} />
              <Route path="/trackOrder" element={<TrackOrder />} />
              <Route path="/SmartPhones" element={<SmartPhones />} />
              <Route path="/Speakers" element={<Speakers />} />
              {/* Cart page with quantity update callback */}
              <Route path="/Cart" element={<Cart setCartQuantity={setCartQuantity} />} />
              {/* Favorites page with quantity update callback */}
              <Route path="/Favourites" element={ <Favourites setFavouriteQuantity={setFavouriteQuantity} />}/>

              {/* Main Home Page with nested routes */}
              <Route path="/" element={
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
                }>
                {/* Nested Routes for ProductSection_02 deals */}
                <Route index element={<Latest_Products />} />
                <Route path="deals/latest-products" element={<Latest_Products />}/>
                <Route path="deals/top-rating" element={<Top_Rating />} />
                <Route path="deals/best-selling" element={<Best_Selling />} />
              </Route>
            </Routes>
            {/* Footer component appears on all pages */}
            <Footer />
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;