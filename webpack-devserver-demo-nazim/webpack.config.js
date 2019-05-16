var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: { 
        app: ["./src/scripts/app.js","./src/scripts/settings.js"]
    }, 
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    watch:true,
    resolve: { extensions: [".js", ".ts"] },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 1234,
        compress: true,
        writeToDisk: true,
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(['dist']) 
   ]

}