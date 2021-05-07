let defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  // mode: "jit",
  purge: [
    "./derealize-jit.html",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./src/**/*.wxml",
  ],
  corePlugins: {},
  variants: {},
  theme: {},
};
