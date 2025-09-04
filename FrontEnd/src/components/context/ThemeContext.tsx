import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for theme management
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // State to track the current theme, defaults to "light"
  const [theme, setTheme] = useState("light");

  // Effect to initialize theme from localStorage on component mount
  useEffect(() => {
    // Retrieve saved theme preference from localStorage or default to "light"
    const savedTheme = localStorage.getItem("theme") || "light";
    // Update state with the saved theme
    setTheme(savedTheme);
    // Add the theme class to the document's root element
    document.documentElement.classList.add(savedTheme);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    // Determine the new theme based on current theme
    const newTheme = theme === "light" ? "dark" : "light";
    // Update state with the new theme
    setTheme(newTheme);
    // Save the new theme preference to localStorage
    localStorage.setItem("theme", newTheme);
    // Remove the old theme class from document root
    document.documentElement.classList.remove(theme);
    // Add the new theme class to document root
    document.documentElement.classList.add(newTheme);
  };

  // Provide theme state and toggle function to child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
