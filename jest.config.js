module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
};
