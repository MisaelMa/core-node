const baseConfig = require('./node_modules/@televisaunivision/jest/jestConfig');

module.exports = {
  ...baseConfig,
  coveragePathIgnorePatterns: [
    ...baseConfig.coveragePathIgnorePatterns,
    '<rootDir>/src/index.tsx',
  ],
  preset: 'react-native',
};
