module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": "off",
    "linebreak-style": "off",
    quotes: ["error", "double"],
  },
};
