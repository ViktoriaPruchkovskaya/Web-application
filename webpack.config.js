'use strict';

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
    {
      from: './public/fonts',
      to: './fonts'
    },
    {
      from: './public/assets',
      to: './assets'
    },
    {
      from: './public/fonts.css',
      to: './fonts.css'
    },
    {
      from: './public/style.css',
      to: './style.css'
    }
]);

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        publicPath: '/dist',
        proxy:{
            '/game': 'http://api-endpoint.igdb.com/game',
            changeOrigin: true,
        }
    },
    plugins: [
        HtmlWebpackPluginConfig,
        CopyWebpackPluginConfig
    ]
}