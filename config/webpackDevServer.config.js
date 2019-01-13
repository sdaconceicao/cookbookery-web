'use strict';

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware'),
    noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware'),
    path = require('path'),
    config = require('./webpack.config.dev'),
    paths = require('./paths');

module.exports = {
    disableHostCheck: true,
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    watchContentBase: true,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    overlay: false,
    historyApiFallback: {
        disableDotRule: true,
    },
    before(app) {
        app.use(errorOverlayMiddleware());
        app.use(noopServiceWorkerMiddleware());
    },
};
