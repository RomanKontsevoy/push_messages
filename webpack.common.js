const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: {
        polyfills: './src/js/polyfills.js',
        main: './src/js/main.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //     splitChunks: { // общие импорты в разных файлах выделяем в отдельный
    //         chunks: 'all'
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img'
                        }
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: 'html-loader',
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
            // chunks: ['index']
        }),
        new webpack.ProvidePlugin({
            // _: 'lodash' // нужно для того, чтобы определенные модули были доступны в качестве переменной по всему проекту. Например, $: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),

    ],
};