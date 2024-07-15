/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "primary": "#0A192F",
        // "secondary": "#F97316",
        // "tertiary": "#54D688",

         // Alternative 1
        //  "primary": "#1E293B",
        //  "secondary": "#EF4444",
        //  "tertiary": "#10B981",
         
         // Alternative 2
         // "primary": "#0D3B66",
         // "secondary": "#FF6F61",
         // "tertiary": "#3FA796",
         
         // Alternative 3
         // "primary": "#1F2937",
         // "secondary": "#E11D48",
         // "tertiary": "#34D399",

          // Alternative 4
        // "primary": "#243B53",
        // "secondary": "#FFA500",
        // "tertiary": "#4CAF50",
        
        // Alternative 5
        // "primary": "#2C3E50",
        // "secondary": "#FFC107",
        // "tertiary": "#8BC34A",
        
        // Alternative 6
        // "primary": "#34495E",
        // "secondary": "#FF9800",
        // "tertiary": "#00BCD4",

         // Dark Theme
         "primary": "#1E1E1E",
         "secondary": "#FFCC00",
         "tertiary": "#4CAF50",

        //  Light Theme
        // "primary": "#F5F5F5",
        // "secondary": "#007ACC",
        // "tertiary": "#4CAF50",
      }
     
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "639px" },
    }
  },
  plugins: [],
}