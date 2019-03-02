'use strict';
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
    throw err;
});

// Ensure environment variables are read.
require('../config/env');

const chalk = require('chalk'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    checkRequiredFiles = require('react-dev-utils/checkRequiredFiles'),
    {choosePort, createCompiler, prepareUrls} = require('react-dev-utils/WebpackDevServerUtils'),
    openBrowser = require('react-dev-utils/openBrowser'),
    paths = require('../config/paths'),
    config = require('../config/webpack.config.dev'),
    serverConfig = require('../config/webpackDevServer.config');

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
}

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
choosePort(HOST, DEFAULT_PORT)
    .then(port => {
        if (port == null) {
            // We have not found a port.
            return;
        }
        const protocol = process.env.HTTPS === 'true' ? 'https' : 'http',
            appName = require(paths.appPackageJson).name,
            urls = prepareUrls(protocol, HOST, port),
            compiler = createCompiler(webpack, config, appName, urls, true),
            devServer = new WebpackDevServer(compiler, serverConfig);
        // Launch WebpackDevServer.
        devServer.listen(port, HOST, err => {
            if (err) {
                return console.log(err);
            }
            //clearConsole();
            console.log(chalk.cyan('Starting the development server...\n'));
            openBrowser(urls.localUrlForBrowser);
        });

        ['SIGINT', 'SIGTERM'].forEach(function(sig) {
            process.on(sig, function() {
                devServer.close();
                process.exit();
            });
        });
    })
    .catch(err => {
        if (err && err.message) {
            console.log(err.message);
        }
        process.exit(1);
    });
