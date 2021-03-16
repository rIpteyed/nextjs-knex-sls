// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    colors: {
      "coral-red": {
        50: "#fef5f5",
        100: "#feeaeb",
        200: "#fccbce",
        300: "#faacb0",
        400: "#f66e75",
        500: "#f2303a",
        600: "#da2b34",
        700: "#b6242c",
        800: "#911d23",
        900: "#77181c",
      },
    },
  },
};
