var path = require('path');
module.exports = {
  mode: 'production',
  entry: 'index.tsx',
  output: {
    path: path.resolve('lib'),
    filename: 'dist/index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
