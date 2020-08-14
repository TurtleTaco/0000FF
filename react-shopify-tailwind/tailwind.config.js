module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {},
    minHeight: {
      "0": "0",
      "25": "25%",
      "50": "50%",
      "75": "75%",
      full: "100%",
      fullwidth: "100vw",
    },
    height: {
      fullwidth: "100vw",
    },
  },
  variants: {},
  plugins: [],
};
