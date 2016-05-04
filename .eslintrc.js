module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": [2, "never"],
    "quotes": [2, "double"],
    "space-before-function-paren": 0,
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
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
