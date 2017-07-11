/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

const merge = require('webpack-merge');

const CleanPlugin = require('clean-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const strip = require('strip-loader');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const base = require('./base.config');

const prod = {
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: strip.loader('debug'),
        }]
    },
    plugins: [
        new CleanPlugin([base.projectBuild], {root: base.projectRoot}),
        new UglifyJSPlugin(),
        new ClosureCompiler({
            options: {
                compilationLevel: 'SIMPLE',
                languageIn: 'ES6',
                languageOut: 'ES5',
                warningLevel: 'QUIET',
            }
        }),
    ]
};

module.exports = merge(base.config, prod);