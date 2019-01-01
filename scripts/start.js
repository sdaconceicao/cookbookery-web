'use strict';

process.env.NODE_ENV = process.argv.some(arg => arg.indexOf('--target') > -1) && process.argv[3].split("=")[1] ==='prod' ? 'production' : 'development';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

var chalk = require('chalk');
var webpack = require('webpack');
var clearConsole = require('react-dev-utils/clearConsole');
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
var config = require('../config/webpack.config.dev');
var paths = require('../config/paths');

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
}

function setupCompiler() {

    console.log('Building bundle...');
    webpack(config).watch({poll: true, aggregateTimeout: 300}, function(err, stats) {
        if (err) {
            console.log(chalk.red('Failed to compile.'), err);
        } else if (stats.compilation.errors.length) {
            console.log(chalk.red(stats.compilation.errors));
            console.log(chalk.red.bold(`Failed with ${stats.compilation.errors.length} ${stats.compilation.errors.length > 1 ? 'errors' : 'error'} `));
        } else {
            console.log(chalk.blue.bold('Compiled successfully at '+ new Date()));
        }
    });

}

function run() {
    setupCompiler();
}

run();
