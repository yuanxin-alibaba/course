const path = require('path');
const YuanxinPlugin = require('./plugins/yuanxin-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.yuanxin/,
                use: {
                    loader: path.resolve('./loaders/yuanxin-loader.js'),
                }
            }
        ]
    },
    plugins: [
        new YuanxinPlugin()
    ]
};
