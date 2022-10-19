module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'no-unsafe-optional-chaining': 'off',
    'no-restricted-syntax': 'off',
    'no-labels': 'off',
  },
};
