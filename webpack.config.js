module.exports = options => {
    return {
        entry: './src',
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