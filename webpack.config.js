const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    context: path.join(__dirname, 'src'),
    entry: './@core/scripts/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './@core/index.html',
                    to: path.resolve(__dirname, 'dist'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: `./index.css`,
        }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx', '.sass', '.scss', '.css' ],
        fallback: { 'path': false },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/',
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3233,
        host: 'localhost',
        historyApiFallback: true,
    },
    stats: 'minimal',
    performance: {
        hints: false,
    },
};

module.exports = config;