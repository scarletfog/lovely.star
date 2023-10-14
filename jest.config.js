module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testRegex: '((\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/build/', '/jsdoc/', '/cypress/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  collectCoverage: false,
  maxWorkers: "50%",
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  moduleDirectories: ['node_modules', 'src'],
};