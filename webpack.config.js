const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'target', 'dist')
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.css?$/,
                loader: "css-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PATHS.src, 'index.html'),
            filename: 'index.html',
        })
    ],
    entry: "./app/app.module.js",
    output: {
        filename: "bundle.js"
    }
}