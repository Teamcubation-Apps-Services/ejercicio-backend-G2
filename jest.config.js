/** @type {import('ts-jest/dist/types').InitialOptionsTsJest}*/
module.exports= {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: [
        '<rootDir>/src/routes/**/*.ts',
        '<rootDir>/src/controllers/**/*.ts',
        '<rootDir>/src/services/**/*.ts',
      ],
};