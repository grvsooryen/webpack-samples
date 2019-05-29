const path = require('path');

module.exports = {

	mode: "none",

	entry: {
		app: "./index.js"
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ["style-loader", "css-loader"]
			}
		]
	}
};
