module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  transformIgnorePatterns: ['./node_modules/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
