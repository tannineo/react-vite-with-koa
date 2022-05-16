// this is an overall eslint config for next.js project,
// though it will also affects other ts projects.
// for VSCode plugin limitations, eslint will only read
// the config files on root folder, but we also maintains
// several projects, that is why we have repeated
// eslintrc files

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
