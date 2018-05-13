var path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ]
    },
    entry: "./app/app.module.js",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.css'],
    }
}