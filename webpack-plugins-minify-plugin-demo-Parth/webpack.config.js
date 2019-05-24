const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  mode: "none",

  entry: {
    app: "./src/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new MinifyPlugin()]
};
