module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": "2021"
  },
  rules: {
    "indent": ["error", 2],
    "no-undef": "error"
  }
}
