/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: "node",
    transform: {
      "^.+\.ts$": ["ts-jest",{}],
    },
    coverageReporters: ['html', 'text'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    coverageThreshold: {
      global: {
        branches:100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  };