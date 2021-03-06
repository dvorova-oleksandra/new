const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = 
{
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    devServer:{
        historyApiFallback: true,
    },
    module:
    {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
        plugins: [
            'postcss-import',
            'postcss-flexbugs-fixes',
            'postcss-nested',
            'postcss-custom-properties',
            'tailwindcss',
            'autoprefixer',
        ],
    },
    plugins :[
        new MiniCssExtractPlugin({
            filename: './src/index.css',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        }),
    ],
};