/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
         fadeIn: {
           "0%": { opacity: 0 },
          "100%": { opacity: 100 },
       },
       },
        fontFamily: {
        sans: ['var(--font-permanent_marker)'],
        
      },

       animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
    },
    
  },
  plugins: [],
}

