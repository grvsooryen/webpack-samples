const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "none",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].js"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
};
