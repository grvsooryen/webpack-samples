var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	mode: "production",

	entry: [
		"./index.js",
		"./index1.js"
	],

	optimization: {
		runtimeChunk: true
	},

	output: {
		path: path.join(__dirname, "dist"),
		filename: "app.js",
		chunkFilename: "[name].js"
	},

	plugins: [
		new HtmlWebpackPlugin()
	]
};
