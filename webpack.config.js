const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.tsx",
    output: {
        path: path.resolve('./build'),
        filename: './static/js/bundle-[chunkhash].js',
        chunkFilename: './static/js/[chunkhash].js',
        assetModuleFilename: 'src/assets/images/[name].[ext]'
    },
    target: "web",
    devServer: {
        port: "8080",
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.svg']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
                type: 'asset/resource'
             }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })]
}