/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT ({
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "./dist/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        saira: ['Saira Condensed', 'sans-serif'],
      },
      content: {
        rocket: "url('./assets/rocket.png')",
      },
    },
  },
  plugins: [],
})

