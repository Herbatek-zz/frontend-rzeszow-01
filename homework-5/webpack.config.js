// var path = require('path');
// var webpack = require('webpack');
//
// var DEVELOPMENT = process.env.NODE_ENV === 'development';
// var PRODUCTION = process.env.NODE_ENV === 'production';
//
// var entry = PRODUCTION
//     ?   ['./src/app.js']
//     :   [
//         './src/app.js',
//         'webpack/hot/dev-server',
//         'webpack-dev-server/client?http://localhost:8080'
//         ];
//
// var plugins = PRODUCTION
//     ?   []
//     :   [ new webpack.HotModuleReplacementPlugin() ];
//
// module.exports = {
//     entry: entry,
//     output: {
//         path: path.join(__dirname, 'dist'),
//         publicPath: '/dist/',
//         filename: 'bundle.js'
//     },
//     devtool: 'source-map',
//     mode: 'development',
//     plugins: plugins,
//     module: {
//             rules: [
//                 {
//                     test: /\.js$/,
//                     exclude: '/node_modules/',
//                     use: {
//                         loader: 'babel-loader'
//                     }
//                 }
//             ]
//     }
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ?   ['./src/index.js']
    :   [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
        ];

var plugins = PRODUCTION
    ?   []
    :   [
          new CleanWebpackPlugin(['dist']),
          new HtmlWebpackPlugin({title: 'Weather'}),
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin()
    ];

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    mode: 'development',
    plugins: plugins,
    module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
    }
};
