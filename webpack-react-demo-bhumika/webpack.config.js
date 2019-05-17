const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { //webpack syntax
    entry: './src/index.js', //the journey starts for webpack and point out our index.js file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '' 
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue']
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                filename: 'index.html',
                inject: 'body'
            })
        ]
};
