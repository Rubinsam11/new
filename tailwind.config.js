// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure this path is correct and includes all your React files
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // Include @heroui theme files if using it
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",  // Enable dark mode with class-based strategy
  plugins: [heroui()], // If you are using the heroui plugin
};
