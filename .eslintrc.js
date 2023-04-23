module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/react-native',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};