const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/applications.webp')",
        'login': "url('/public/assets/login-bg.png')",
      },
    },
  },
  plugins: [require('daisyui'),],
})