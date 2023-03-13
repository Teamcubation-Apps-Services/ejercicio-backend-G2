/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/routes/**/*.ts',
    '<rootDir>/src/controllers/**/*.ts',
    '<rootDir>/src/services/**/*.ts',
  ],
  testPathIgnorePatterns: ['dist'],
  setupFiles: ['<rootDir>/test-setup.js'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
};
