const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins
});
