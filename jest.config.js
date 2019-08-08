module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/**/*{js,ts,jsx,tsx}',
    '!<rootDir>/packages/**/*stories.{js,ts,jsx,tsx}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  snapshotSerializers: ['jest-emotion'],
};
