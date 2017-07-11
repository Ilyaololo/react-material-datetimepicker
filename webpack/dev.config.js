/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

const merge = require('webpack-merge');

const base = require('./base.config');

const dev = {
    output: {
        publicPath: base.projectBuild,
    },
    devtool: 'inline-source-map',
};

module.exports = merge(base.config, dev);