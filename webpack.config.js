var path = require('path');

module.exports = {
    mode: "development",
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
    entry: "./app/app.module.js",
    output: {
        filename: "bundle.js"
    }
}