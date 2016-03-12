var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = __dirname + '/node_modules';

const config = {

    // Gives you sourcemaps without slowing down rebundling
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    devtool  : 'eval-source-map',
    resolve: { alias: {} },
    entry    : path.join(__dirname, 'src/main.js'),
    output   : {
        path      : path.join(__dirname, '/dist/'),
        filename  : 'bundle.js',
        publicPath: '/'
    },
    module   : {
        noParse:[],
        loaders: [
            {
                test   : /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel'
            },
            //{
            //    test  : /\.css$/,
            //    loader: 'style!css'
            //},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
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
config.addVendor('bootstrap.css', node_modules + '/bootstrap/dist/css/bootstrap.min.css');

module.exports = config;