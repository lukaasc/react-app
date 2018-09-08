module.exports = {
  rootDir: process.cwd(),
  verbose: true,
  setupFiles: ['<rootDir>/_config/jest-setup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  testURL: 'http://localhost/',
  collectCoverageFrom: ['**/src/*/*.{js,jsx}', '!**/config/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: 'node'
};
