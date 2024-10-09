const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        darker: "#212121",
        rose: "#EB455F",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
