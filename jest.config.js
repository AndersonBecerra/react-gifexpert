module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/tests/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
}