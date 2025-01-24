const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "night-sky": "radial-gradient(circle at 50% 50%, #000814, #001d3d)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Style Neumorphism pour les boutons et les éléments interactifs
        ".shadow-neumorphism": {
          borderRadius: "20px",
          boxShadow: "31px 31px 61px #bebebe, -31px -31px 61px #ffffff",
          backgroundColor: "#e0e0e0",
        },
        ".dark-shadow-neumorphism": {
          borderRadius: "20px",
          backgroundColor: "#272727",
          boxShadow: "inset 2px 2px 5px #141414, inset -5px -5px 10px #212121",
          color: "#eeeeee",
        },
      });
    }),
  ],
};
