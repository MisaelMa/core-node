// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [
    './node_modules/@televisaunivision/eslint-settings/react',
    // We should wait until this config works with eslint 8,
    // next package should fix that
    // https://github.com/facebook/react-native/issues/33642
    // '@react-native-community',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    'react/jsx-uses-react': 'error',
  },
};
