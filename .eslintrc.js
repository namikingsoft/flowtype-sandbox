module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  "plugins": [
    "standard",
  ],
  "rules": {
    "quotes": [2, "double"],
    "space-before-function-paren": 0,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src"
        ]
      }
    }
  }
};
