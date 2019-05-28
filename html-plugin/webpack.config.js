const path = require('path');

const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: "none",

  entry: {
    app: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },

  plugins: [
    new MinifyPlugin(),
    new HtmlWebpackPlugin()
  ]

};
