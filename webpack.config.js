var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    // Gives you sourcemaps without slowing down rebundling
    devtool  : 'eval-source-map',
    entry    : path.join(__dirname, 'src/app.js'),
    output   : {
        path      : path.join(__dirname, '/dist/'),
        filename  : 'bundle.js',
        publicPath: '/'
    },
    module   : {
        loaders: [
            {
                test   : /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel'
            },
            {
                test  : /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase       : "./dist",
        colors            : true,
        historyApiFallback: true,
        inline            : true,
        hot               : true
    }
};

module.exports = config;