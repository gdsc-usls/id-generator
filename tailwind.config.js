/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1464ff",
          200: "#0c9d57",
        },
        secondary: {
          100: "#ACACAC",
          200: "#111111",
          300: "#1c1c1c",
          400: "#505050",
        },
      },
      fontFamily: {
        google: ["Google-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
