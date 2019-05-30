const path = require('path');

module.exports = {

  mode: "none",
  
  // development
  // devtool : "source-map",
  
  // devtool : "eval-source-map",
  // devtool : "eval",
  // devtool : "cheap-eval-source-map",

  //production 

 // No devtool option
  // devtool : "source-map",
  entry: {
    index: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  }

};
