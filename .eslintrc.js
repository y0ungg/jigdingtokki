module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    webextensions: true,
  },
  extends: "prettier",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
