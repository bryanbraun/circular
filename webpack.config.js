const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'test-1': './test-1/webpack-entry.js',
    'test-2': './test-2/webpack-entry.js',
    'test-3': './test-3/webpack-entry.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname),
    filename: './[name]/webpack.bundle.js',
  },
  optimization: {
    minimize: false
  },
};
