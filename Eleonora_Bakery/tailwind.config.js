/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    	"./index.html",
	    "./src/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      
      'cookie': ['Cookie', 'cursive'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  screens: {

    'xs':'400px',

    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
}

