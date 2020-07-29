const {resolve} = require('path');

module.exports = {
    entry: resolve(__dirname, 'src/ts/'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: [
                    /node_modules/,
                    /dist/,
                    /vendor/
                ],
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.(ts)$/,
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
        path: resolve(__dirname, "dist/js/")
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
};