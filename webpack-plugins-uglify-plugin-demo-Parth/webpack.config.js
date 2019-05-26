const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "none",

  entry: {
    app: "./src/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new TerserPlugin()]
};
