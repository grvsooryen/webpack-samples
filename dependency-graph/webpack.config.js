const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {

  mode: "none",

  entry: {
    module: "./src/module.js",
    vendor: "./src/vendor.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },

  plugins: [
    new BundleAnalyzerPlugin()
  ]

};
