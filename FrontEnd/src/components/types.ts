export type Theme = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  // Add other color properties as needed
}

export const lightTheme: ThemeColors = {
  primary: '#e4232b',
  background: '#ffffff',
  text: '#000000',
  // ... other light theme colors
};

export const darkTheme: ThemeColors = {
  primary: '#f05253',
  background: '#111827',
  text: '#ffffff',
  // ... other dark theme colors
};