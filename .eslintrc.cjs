const globals = require('globals');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  globals: {
    ...globals.browser,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.tailwind.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-refresh',
    'react'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  globals: {
    ...globals.browser,
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
}
