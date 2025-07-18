/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        romantic: "#ffe4e6", // Fondo rosita claro
        accent: "#db2777", // Rosa fuerte para textos y botones
      },
      fontFamily: {
        romantic: ["'Pacifico'", "cursive"],
      },
    },
  },
  plugins: [],
};
