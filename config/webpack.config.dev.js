'use strict';

const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'),
    InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin'),
    WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin'),
    eslintFormatter = require('react-dev-utils/eslintFormatter'),
    getClientEnvironment = require('./env'),
    publicUrl = '',
    publicPath = '/',
    env = getClientEnvironment(publicUrl),
    paths = require('./paths'), 
    main = [require.resolve('react-dev-utils/webpackHotDevClient'), require.resolve('./polyfills'), paths.appIndexJs ];;

function getParam(name){
    let value = process.argv.some(arg => arg.indexOf(`--${name}`) > -1)
        ? process.argv[process.argv.findIndex(function(arg){
            return arg.indexOf(name) > 1;
        })].split("=")[1]
        : null;

    return value;
}

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        main: main,
        vendor: [ "react", "react-dom"]
    },
    output: {
        path:  paths.appBuild,
        pathinfo: true,
        filename: 'static/js/[name].bundle.js',
        publicPath: publicPath
    },
    resolve: {
        modules: [
            paths.path.resolve(__dirname, "src"),
            paths.node,
        ],
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            Api: paths.path.join(__dirname, "../src/api/"),
            Components: paths.path.join(__dirname, "../src/components/"),
            Mocks: paths.path.join(__dirname, "../mocks/"),
            Pages: paths.path.join(__dirname, "../src/pages/")
        },
    },


    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)(\?.*)?$/,
                    /\.css$/,
                    /\.sass$/,
                    /\.scss$/,
                    /\.json$/,
                    /\.svg$/
                ],
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
            include: [
                paths.appSrc,
                paths.node + '/sad-shared-components',
                paths.node + '/cookbookery-shared'
            ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules\/(?!(sad-shared-components|cookbookery-shared)\/).*/,
                loader: 'babel-loader'
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.css|scss$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            config: {
                                path: paths.path.resolve(__dirname, 'postcss.config.js'),
                            },
                        },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new InterpolateHtmlPlugin(env.raw),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        new webpack.DefinePlugin(env.stringified),
        new webpack.DefinePlugin({MOCKS_ENABLED: (process.argv.some(arg => arg.indexOf('mocks=true') > 1 ) || false)}),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules)
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};