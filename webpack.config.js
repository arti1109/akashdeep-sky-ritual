const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'assets/',
                    },
                }],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            three: path.resolve(__dirname, 'node_modules/three'),
        },
    },
    devtool: 'source-map',
    mode: 'development',
};