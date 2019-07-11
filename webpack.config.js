const {resolve} = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/,
                    /dist/,
                    /vendor/
                ],
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.(ts|tsx)$/,
                exclude: [
                    /node_modules/,
                    /vendor/
                ],
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    output: {
        filename: "mail_crypter_admin.js",
        path: resolve(__dirname, "js")
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
};