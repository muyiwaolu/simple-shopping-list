/* eslint-disable quote-props */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
  },
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  "globals": {
    "JSX": true,
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "project": "./tsconfig.json",
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true,
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false,
      },
    }],
    "@typescript-eslint/quotes": ["error", "double"],
    "sort-keys": ["warn", "asc", {
      "caseSensitive": true,
      "minKeys": 2,
      "natural": false,
    }],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx"],
      },
    },
  },
};
