var path = require('path');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname, './static'),
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
               test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
               loader: 'file'
            }
        ]
    }
};
