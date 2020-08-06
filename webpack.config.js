const { resolve } = require('path');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

let config = {
    module: {}
};

const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: [
            /node_modules/,
            /vendor/,
            /dist/
        ],
        use: {
            loader: "babel-loader"
        }
    }, {
        test: /\.(ts|tsx)$/,
        exclude: [
            /node_modules/,
            /vendor/,
            /dist/
        ],
        use: {
            loader: "ts-loader"
        }
    }
];

const backend = Object.assign({}, config, {
    name: "backend",
    entry: "./src/ts/backend/",
    module: {
        rules: rules
    },
    output: {
        filename: 'mail-encrypt-backend.js',
        path: resolve(__dirname, 'dist/js/')
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
});

const gutenberg = Object.assign({}, config, {
    name: "gutenberg",
    entry: './src/ts/gutenberg',
    module: {
        rules: rules
    },
    output: {
        filename: 'mail-encrypt-gutenberg.js',
        path: resolve(__dirname, 'dist/js/')
    },
    plugins: [
        new DependencyExtractionWebpackPlugin({injectPolyfill: true})
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
});

const frontend = Object.assign({}, config, {
    name: "frontend",
    entry: './src/ts/frontend',
    module: {
       rules: rules
    },
    output: {
        filename: 'mail-encrypt-frontend.js',
        path: resolve(__dirname, 'dist/js/')
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
});

module.exports = [
    backend, gutenberg, frontend
];