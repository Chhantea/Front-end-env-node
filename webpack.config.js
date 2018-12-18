module.exports = options => {
    return {
        devtool: 'source-map',
        entry: './src/index.js',
        devServer: {
            historyApiFallback: true
        },
        output: {
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader",
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        }
    }

};