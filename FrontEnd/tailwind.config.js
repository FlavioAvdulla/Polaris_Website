/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			'shadow-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
  			'shadow-dark': '0 6px 8px rgba(0, 0, 0, 0.25)'
  		},
  		colors: {
  			primary: '#e4232b',
			darkColor: '#1a1a1a',
  			secondary_01: '#f05253',
  			secondary_02: '#f37a7a',
  			secondary_03: '#f1ac7c',
  			secondary_04: '#e87c62',
  			secondary_05: '#fde2be'
  		},
  		fontFamily: {
  			camptonBlack: [
  				'CamptonBlack',
  				'sans-serif'
  			],
  			camptonBlackItalic: [
  				'CamptonBlackItalic',
  				'sans-serif'
  			],
  			camptonBold: [
  				'CamptonBold',
  				'sans-serif'
  			],
  			camptonBoldItalic: [
  				'CamptonBoldItalic',
  				'sans-serif'
  			],
  			camptonBook: [
  				'CamptonBook',
  				'sans-serif'
  			],
  			camptonBookItalic: [
  				'CamptonBookItalic',
  				'sans-serif'
  			],
  			camptonExtraBold: [
  				'CamptonExtraBold',
  				'sans-serif'
  			],
  			camptonExtraBoldItalic: [
  				'CamptonExtraBoldItalic',
  				'sans-serif'
  			],
  			camptonExtraLight: [
  				'CamptonExtraLight',
  				'sans-serif'
  			],
  			camptonExtraLightItalic: [
  				'CamptonExtraLightItalic',
  				'sans-serif'
  			],
  			camptonLight: [
  				'CamptonLight',
  				'sans-serif'
  			],
  			camptonLightItalic: [
  				'CamptonLightItalic',
  				'sans-serif'
  			],
  			camptonMedium: [
  				'CamptonMedium',
  				'sans-serif'
  			],
  			camptonMediumItalic: [
  				'CamptonMediumItalic',
  				'sans-serif'
  			],
  			camptonSemiBold: [
  				'CamptonSemiBold',
  				'sans-serif'
  			],
  			camptonSemiBoldItalic: [
  				'CamptonSemiBoldItalic',
  				'sans-serif'
  			],
  			camptonThin: [
  				'CamptonThin',
  				'sans-serif'
  			],
  			camptonThinItalic: [
  				'CamptonThinItalic',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			xs: '320px',
  			sm: '425px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1440px',
  			'2xl': '1536px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
