/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: "node",
    transform: {
      "^.+\.ts$": ["ts-jest",{}],
    },
    collectCoverage: true,
    coverageReporters: ['html', 'text'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/']
  };