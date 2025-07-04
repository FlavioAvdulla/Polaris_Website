import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Restore the saved scroll position (if any) during navigation
    const storedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition));
    }

    // Save the scroll position before navigating away
    const handleUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleUnload);

    // Cleanup to remove the event listener
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [location]); // Runs on every route change

  return null; // This component does not render anything
};

export default ScrollManager;


// import React, { useEffect } from "react";

// const ScrollManager = () => {
//   useEffect(() => {
//     const storedScrollPosition = sessionStorage.getItem("scrollPosition");

//     // Restore scroll position after refresh
//     if (storedScrollPosition) {
//       window.scrollTo(0, parseInt(storedScrollPosition));
//     }

//     const handleScroll = () => {
//       // Save scroll position on scroll
//       sessionStorage.setItem("scrollPosition", window.scrollY.toString());
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return null;
//    // No UI output needed
// };

// export default ScrollManager;
