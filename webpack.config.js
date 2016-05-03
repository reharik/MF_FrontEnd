var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = __dirname + '/node_modules';

const config = {

    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    // Gives you sourcemaps without slowing down rebundling
    devtool  : 'cheap-module-eval-source-map',
    resolve: { alias: {} },
    entry    : path.join(__dirname, 'src/index.js'),
    output   : {
        path      : path.join(__dirname, '/dist/'),
        filename  : 'bundle.js',
        publicPath: '/'
        },
    module   : {
        noParse:[],
        loaders: [
            //{
            //    test  : /\.css$/,
            //    loader: 'style!css'
            //},
    //{
    //    test   : /\.jsx?$/,
    //    exclude: /node_modules/,
    //    loader : 'babel'
    //},
            { test   : /\.jsx?$/, exclude: /[\\\/]node_modules[\\\/](?!react-redux-grid)/, loader : 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.png$/, loader: "url-loader", query: { mimetype: "image/png" } },
            { test: /\.jpg$/, loader: "url-loader", query: { mimetype: "image/jpg" } },
            { test: /\.gif$/, loader: "url-loader", query: { mimetype: "image/gif" } },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['url-loader?limit=10000&mimetype=application/font-woff' ]
            },
            { test: /\.styl$/, exclude: /[\\\/]node_modules[\\\/](?!react-redux-grid)/, loaders: ['style-loader', 'css-loader', 'stylus-loader'] }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
    ,
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