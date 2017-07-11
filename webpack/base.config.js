/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

require('babel-polyfill');

const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');

const CleanCSSPlugin = require('less-plugin-clean-css');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const projectRoot = path.join(__dirname, '../');
const projectBuild = path.join(projectRoot, './dist');
const projectSource = path.join(projectRoot, './src');

const base = {
    context: projectRoot,
    entry: path.join(projectSource, './index.jsx'),
    output: {
        filename: 'react-material-datetime-picker.js',
        library: 'DateTimePicker',
        libraryTarget: 'umd',
        path: projectBuild,
    },
    resolve: {
        modules: [
            projectSource,
            'node_modules',
        ],
        extensions: ['.json', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: 'less-loader',
                        options: {
                            plugins: [
                                new CleanCSSPlugin({
                                    advanced: true
                                })
                            ]
                        }
                    }],
                }),
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
        }),
        new ExtractTextPlugin('react-material-datetime-picker.css'),
        new ProgressBarPlugin({
            clear: true,
            format: `   build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
            width: 100,
        }),
        new WebpackNotifierPlugin({title: 'React Material DateTime Picker'}),
    ]
};

module.exports = {
    config: base,
    projectBuild,
    projectRoot,
    projectSource,
};