module.exports = {
  plugins: ["prettier", "@typescript-eslint"],
  extends: ["prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    AUTHNAME: "readonly",
    AUTHPASS: "readonly",
    PHASE: "readonly",
  },
  rules: {
    "prettier/prettier": ["error"],
    "prefer-const": "error",
    "no-var": "error",
    "no-console": "warn",
    "no-undef": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
