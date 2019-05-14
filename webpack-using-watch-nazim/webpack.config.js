var path = require("path");

module.exports = {
    entry: { 
        app: "./src/scripts/app.js",
        settings: "./src/scripts/settings.js"
    }, 
    output: {
        path: path.join(__dirname, "../dist/"),
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9000
    },
};