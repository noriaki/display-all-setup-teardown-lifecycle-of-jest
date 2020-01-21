module.exports = {
  globalSetup: '<rootDir>/jest.setup.global.js',
  globalTeardown: '<rootDir>/jest.teardown.global.js',
  setupFiles: [
    '<rootDir>/jest.setup.files1.js',
    '<rootDir>/jest.setup.files2.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.filesAfterEnv1.js',
    '<rootDir>/jest.setup.filesAfterEnv2.js',
  ],
  testEnvironment: '<rootDir>/jest.environment.js',
};
