const path = require('path');

module.exports = {
  mode: 'production',
  entry: './test-2/webpack-entry.js',
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname),
    filename: './test-2/webpack.bundle.js',
  },
};
