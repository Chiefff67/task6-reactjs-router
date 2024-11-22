/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0189FF",
        secondary: "#ECF6FF",
      },
    },
  },
  plugins: [],
};

