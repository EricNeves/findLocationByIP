const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin    = require("copy-webpack-plugin")
const HtmlWebpackPlugin    = require("html-webpack-plugin")
const Dotenv               = require('dotenv-webpack')

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        open: true,
        port: 8080,
        hot: true,
        compress: true
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "[name][contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/images",
                    to: "images"
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            }, 
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}