module.exports = {
  collectCoverage: true,

  collectCoverageFrom: ["src/**/*.js"],

  rootDir: "../",

  modulePaths: ["<rootDir>/src", "<rootDir>/node_modules"],

  testPathIgnorePatterns: [
    ".cache",
    "config",
    "node_modules",
    "public",
    "src",
    "tests/integrations",
  ],

  setupFilesAfterEnv: ["<rootDir>/config/jest.loadershim.js"],

  transform: {
    "^.+\\.js$": "<rootDir>/config/jest.preprocess.js",
  },

  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],

  // Sets up mocks for images and files that the tests either can"t handle
  // or doesn"t make sense to include

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/file-mock.js",
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
};
