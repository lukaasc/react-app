module.exports = {
  rootDir: process.cwd(),
  verbose: true,
  setupFiles: ['<rootDir>/_config/jest-setup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  testURL: 'http://localhost/',
  collectCoverageFrom: ['**/src/*/*.{js,jsx}', '!**/config/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  moduleNameMapper: {
    '\\.(css|less|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy'
  },
  testEnvironment: 'node'
};
