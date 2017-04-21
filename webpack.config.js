const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  devServer: {
    inline:true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }
      ],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        },
        'sass-loader'
      ],
      exclude: /node_modules/,
    }]
  }
};