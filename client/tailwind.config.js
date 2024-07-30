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
        //  "primary": "#1E1E1E",
        //  "secondary": "#FFCC00",
        //  "tertiary": "#4CAF50",

        //  Light Theme
        // "primary": "#F5F5F5",
        // "secondary": "#007ACC",
        // "tertiary": "#4CAF50",
      }
     
    },
    boxShadow: {
      'custom-black': '3px 3px 0px black',
    },
    transitionProperty: {
      'custom-all': 'all',
    },
    translate: {
      '3': '3px',
    },
    screens: {
      lg: { max: "2023px", min: "640px" },
      sm: { max: "639px" },
    }
  },
  important: true,
  plugins: [
    require('daisyui'),
    function({ addUtilities }) {
      const newUtilities = {
       '.btn-custom-primary': {
        padding: '0.5rem 1.5rem', // px-6 py-2
        fontWeight: '500', // font-medium
        backgroundColor: '#0A192F', // bg-indigo-500
        color: '#ffffff', // text-white
        width: 'fit-content', // w-fit
        transition: 'all 0.3s ease-in-out', // transition-all duration-300 ease-in-out
        boxShadow: '3px 3px 0px #F97316', // shadow-[3px_3px_0px_black]
        },
        '.btn-custom-primary:hover': {
          boxShadow: 'none', // hover:shadow-none
          transform: 'translate(3px, 3px)', // hover:translate-x-[3px] hover:translate-y-[3px]
        },
        '.btn-custom-danger': {
          padding: '0.5rem 1.5rem', // px-6 py-2
          fontWeight: '500', // font-medium
          backgroundColor: '#FF7875', // bg-indigo-500
          color: '#ffffff', // text-white
          width: 'fit-content', // w-fit
          transition: 'all 0.3s ease-in-out', // transition-all duration-300 ease-in-out
          boxShadow: '3px 3px 0px red', // shadow-[3px_3px_0px_black]
          },
          '.btn-custom-danger:hover': {
            boxShadow: 'none', // hover:shadow-none
            transform: 'translate(3px, 3px)', // hover:translate-x-[3px] hover:translate-y-[3px]
          },
          
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}