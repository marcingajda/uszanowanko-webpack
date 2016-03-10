path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'assets'),
    devtool: 'source-map',
    entry: {
        cat: './cat.js',
        dog: './dog.js'
    },
    output: {
        path: 'compiled',
        filename: '[name]-bundle.js',
        publicPath: 'compiled/'
    },
    plugins: [
        new ExtractTextPlugin("styles-[name].css", {allChunks:true}),
        new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.js', chunks: ['dog', 'cat']}),
        new AssetsPlugin({
            filename:       'compiled/assets.json',
            prettyPrint:    true
        }),
    ],
    resolve: {
        extensions: ['', '.coffee', '.js', '.scss']
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee-loader" },
            //{ test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(["css", "sass"], {publicPath: ''}) },
            { test: /\.(png|jpg|gif|bmp)/, loader: "file" }
        ]
    }
};