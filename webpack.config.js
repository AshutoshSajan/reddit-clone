const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './assets/js/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },

  module: {
  	rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },

        {
         test: /\.(s*)css$/,
         use: ["style-loader", "css-loader","sass-loader"]
        }
      ]
  },

  devServer: {
  	port: 8000,
  	contentBase: path.join(__dirname, './dist'),
  	hot: true
  },

  plugins: [new HtmlWebpackPlugin({
  	template: './index.html'
  })]
};