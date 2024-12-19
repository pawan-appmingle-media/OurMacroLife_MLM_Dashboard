/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-md": "780px", // Add your custom breakpoint
      },
    },
  },
  plugins: [],
};
