const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testEnvironmentOptions: {
        NODE_ENV: 'test',
    },
    restoreMocks: true,
    collectCoverageFrom: ['src/services/*.ts'],
    coverageReporters: ['text', 'lcov', 'clover', 'html'],
    moduleNameMapper: {
      "^@vdr/(.*)$": '<rootDir>/src/$1'
    },
};
