/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1464ff",
        secondary: {
          100: "#ACACAC",
          200: "#111111",
        },
      },
      fontFamily: {
        google: ["Google-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
