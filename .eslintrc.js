module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "vue/multi-word-component-names": 1,
  },
  overrides: [
    {
      files: ["tests/unit/**/*.spec.{js,ts}"],
      env: {
        jest: true,
      },
    },
  ],
};
