// Import ESLint plugins and utilities for React and TypeScript linting
import reactRefresh from 'eslint-plugin-react-refresh' // Plugin for Fast Refresh in React
import reactHooks from 'eslint-plugin-react-hooks' // Plugin for React Hooks rules
import tseslint from 'typescript-eslint' // TypeScript ESLint utilities
import globals from 'globals' // Global variables for different environments
import js from '@eslint/js' // Core ESLint JavaScript rules

// Export the ESLint configuration
export default tseslint.config(
  // First configuration object: specify directories to ignore
  { ignores: ['dist'] }, // Ignore the 'dist' build directory
  
  // Second configuration object: main linting rules
  {
    // Extend recommended rule sets
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    
    // Apply these rules to TypeScript and TypeScript React files
    files: ['**/*.{ts,tsx}'],
    
    // Language options configuration
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 syntax
      globals: globals.browser, // Include browser global variables (window, document, etc.)
    },
    
    // Register ESLint plugins
    plugins: {
      'react-hooks': reactHooks, // Plugin for React Hooks rules
      'react-refresh': reactRefresh, // Plugin for Fast Refresh rules
    },
    
    // Custom rules configuration
    rules: {
      // Apply recommended React Hooks rules
      ...reactHooks.configs.recommended.rules,
      
      // Rule from react-refresh plugin: only allow component exports in files
      // that use Fast Refresh to ensure proper hot reloading behavior
      'react-refresh/only-export-components': [
        'warn', // Show as warning (not error)
        { allowConstantExport: true }, // Allow constant exports alongside components
      ],
    },
  },
)