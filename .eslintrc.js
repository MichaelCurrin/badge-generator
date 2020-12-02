module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "rules": {
    "semi": [
      2,
      "always"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "quotes": [
      2,
      "double"
    ]
  }
}
