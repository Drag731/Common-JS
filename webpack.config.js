'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        filename: "build.js",
        library: "main"
    }
};