const path = require('path');

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
    new HtmlWebpackPlugin({
      filename : "index.html",
    }),
  ],

  devServer : {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }

};
