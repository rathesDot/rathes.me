module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  globals: {
    __PATH_PREFIX__: ``,
  },
}
