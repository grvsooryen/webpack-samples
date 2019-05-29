var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	mode: "production",

	entry: {
		app: "./index.js"
	},

	optimization: {
		runtimeChunk: true
	},

	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].chunkhash.js",
		chunkFilename: "[name].chunkhash.js"
	},

	plugins: [
		new HtmlWebpackPlugin()
	]
};
