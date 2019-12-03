const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
    return {
        entry: [`./src/index.js`],
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'build'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    corejs: 3,
                                    'useBuiltIns': 'usage',
                                    //'debug': true
                                }]
                            ],
                            cacheDirectory: true
                        }
                    }
                },
                {
                    test: /\.(html)$/,
                    use: 'html-loader'
                },
            ]
        },
    }
};
