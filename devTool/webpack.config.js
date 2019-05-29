const path = require('path');

module.exports = {

  mode: "none",
  // devtool : "source-map",
  entry: {
    index: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  }

};
