const { resolve } = require('path');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const exclude = [
    /node_modules/,
    /dist/,
    /vendor/
];

const rules = [
    {
        test: /\.(js)$/,
        exclude: exclude,
        use: {
            loader: "esbuild-loader",
            options: {
                loader: 'js',
                target: 'es2015'
            }
        }
    }, {
        test: /\.(ts)$/,
        exclude: exclude,
        use: {
            loader: "esbuild-loader",
            options: {
                loader: 'ts',
                target: 'es2015'
            }
        }
    }
];

module.exports = (env, argv) => {
    return {
        name: 'handler',
        entry: './src/index',
        optimization: {
            minimizer: [
                new ESBuildMinifyPlugin({
                    target: 'es2015'
                })
            ]
        },
        module: {
            rules: rules
        },
        devtool: 'source-map',
        plugins: [
            new DependencyExtractionWebpackPlugin({injectPolyfill: true}),
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'mail-protect.stacks.run'
            })
        ],
        output: {
            filename: 'js/mail-protect.js',
            path: resolve(__dirname, 'dist/')
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        mode: argv.mode
    }
}