const path = require('path');

module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
