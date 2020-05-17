/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react', 'react-hooks'],

  extends: ['zurgbot', 'plugin:react/recommended'],
};

/* eslint-enable */
