module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "react-app",
        "react-app/jest"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
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
