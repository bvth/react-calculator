'use strict'
module.exports = { 
    entry: "./src/index.js",
    output: {
        filename: "./public/bundle.js",
    },
    module : {
        rules: [
            {
                loader: "babel-loader"
            },
            {
                test: /\.sass$/,
                loader: "style-loader!css-loader!sass-loader?indentedSyntax"
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            { 
                test: /\.[ot]tf$/, 
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
        ]
    }
}