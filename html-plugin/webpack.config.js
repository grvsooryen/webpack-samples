const path = require('path');

const CleanWebpackPlugin = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: "none",

  entry: {
    app: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].min.js"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MinifyPlugin(),
    new HtmlWebpackPlugin()
  ]

};
