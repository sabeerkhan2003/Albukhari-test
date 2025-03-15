/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 0.7s ease-out forwards', // Adjusted animation timing and easing
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' }, // Start outside the viewport
          '100%': { transform: 'translateY(0)' }, // Slide to the desired position
        },
      },
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
