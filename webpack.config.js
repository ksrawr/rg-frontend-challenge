const HTMLWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true
  },

  // Load Babel, CSS, File, Style
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ]

}