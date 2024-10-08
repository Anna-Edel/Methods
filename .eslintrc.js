module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Включите поддержку глобальных переменных Node.js
    jest: true,  // Если используете Jest, включите поддержку Jest
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error"
  },
};
