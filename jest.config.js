module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  testPathIgnorePatterns: ["<rootDir>/dist/"],
  transform: {
    "^.+\\.vue$": "<rootDir>/jest-vue-transformer.cjs",
  },
};
