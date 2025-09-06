// Importing i18n (internationalization) libraries
import LanguageDetector from 'i18next-browser-languagedetector'; // Detects user's browser language
import { initReactI18next } from 'react-i18next'; // React integration for i18next
import Backend from 'i18next-http-backend'; // Loads translations using HTTP requests
import i18n from 'i18next'; // Main i18next library

// Configuring and initializing i18next
i18n
// Use the HTTP backend to load translation files
  .use(Backend)
  // Use browser language detector to automatically detect user's language
  .use(LanguageDetector)
  // Initialize the React integration
  .use(initReactI18next)
  // Initialize i18next with configuration options
  .init({
    fallbackLng: 'en', // Default language if detected language is not available
    debug: true,
    interpolation: {
      escapeValue: false, // Disable escaping for React already handles XSS protection
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
      // Path to translation files
      // Format: /locales/{language-code}/translation.json
      // Example: /locales/en/translation.json, /locales/fr/translation.json
    }
  });

export default i18n;