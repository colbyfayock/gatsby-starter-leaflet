/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
    "cypress/globals": true,
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  parser: "@babel/eslint-parser",

  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },

  plugins: ["react", "react-hooks", "cypress"],

  extends: ["plugin:react/recommended"],
};

/* eslint-enable */
