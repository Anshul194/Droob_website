/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
     flowbite.content(),
  
  ],
  theme: {
    extend: {
      width: {
        '81em': '81em',
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
