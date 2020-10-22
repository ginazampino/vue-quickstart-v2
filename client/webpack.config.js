// Pathing:
const path = require('path');

// Plugins:
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

// Environmental variables:
const devMode = process.env.NODE_ENV === 'development';


// Webpack:
module.exports = {
    // Developer modes:
    devtool: devMode ? 'inline-cheap-module-source-map' : 'source-map',
    mode: devMode ? 'development' : 'production',

    // Webpack entry points:
    entry: {
        'main': [
            '@babel/polyfill',
            path.join(__dirname, 'index')
        ]
    },

    // Webpack output points:
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },

    // Webpack rules:
    module: {
        rules: [
            // JavaScript:
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },

            // Stylesheets:
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            // Vue:
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            // Image files:
            {
                test: /\.(jpg|jpeg|png|gif|bmp|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    esModule: false
                }
            }
        ]
    },

    // Webpack plugins:
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            chunks: ['main']
        })
    ],

    // Other:
    resolve: {
        alias: {
            '~': __dirname,
            'root': __dirname,
            'vue': 'vue/dist/vue.esm.js'
        },
        extensions: [
            '.json',
            '.js',
            '.css',
            '.scss'
        ]
    }
};
