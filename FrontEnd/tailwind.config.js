/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
  extend: {
    colors: {
      primary: '#e4232b',
      secondary_01: '#f05253',
      secondary_02: '#f37a7a',
      secondary_03: '#f1ac7c',
      secondary_04: '#e87c62',
      secondary_04: '#fde2be',
    },
    fontFamily: {
      'camptonBlack': ['CamptonBlack', 'sans-serif'],
      'camptonBlackItalic': ['CamptonBlackItalic', 'sans-serif'],
      'camptonBold': ['CamptonBold', 'sans-serif'],
      'camptonBoldItalic': ['CamptonBoldItalic', 'sans-serif'],
      'camptonBook': ['CamptonBook', 'sans-serif'],
      'camptonBookItalic': ['CamptonBookItalic', 'sans-serif'],
      'camptonExtraBold': ['CamptonExtraBold', 'sans-serif'],
      'camptonExtraBoldItalic': ['CamptonExtraBoldItalic', 'sans-serif'],
      'camptonExtraLight': ['CamptonExtraLight', 'sans-serif'],
      'camptonExtraLightItalic': ['CamptonExtraLightItalic', 'sans-serif'],
      'camptonLight': ['CamptonLight', 'sans-serif'],
      'camptonLightItalic': ['CamptonLightItalic', 'sans-serif'],
      'camptonMedium': ['CamptonMedium', 'sans-serif'],
      'camptonMediumItalic': ['CamptonMediumItalic', 'sans-serif'],
      'camptonSemiBold': ['CamptonSemiBold', 'sans-serif'],
      'camptonSemiBoldItalic': ['CamptonSemiBoldItalic', 'sans-serif'],
      'camptonThin': ['CamptonThin', 'sans-serif'],
      'camptonThinItalic': ['CamptonThinItalic', 'sans-serif'],
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
  },
},
plugins: [
  require("tailwindcss-animate"),
  require("@tailwindcss/aspect-ratio"),
],
}
