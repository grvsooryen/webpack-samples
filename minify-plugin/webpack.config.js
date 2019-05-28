const path = require('path');

// importing plugins that do not come by default in webpack
const MinifyPlugin = require("babel-minify-webpack-plugin");

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
    new MinifyPlugin()
  ]

};
