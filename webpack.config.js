const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProdaction = process.env.NODE_ENV === 'prodaction'

module.exports = {
    entry: './src/main.ts',
    mode: isProdaction ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.ts',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'img', to: 'static' }],
        }),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: isProdaction ? 'hidden-source-map' : 'source-map',
}
