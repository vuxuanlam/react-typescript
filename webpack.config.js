const path = require('path');

module.exports = {
    entry: {
        "react-sample": './src/index.tsx',
        "color-sample":'./src/color.tsx',
        "taskManager-sample":'./src/taskManager.tsx',
        "cart-sample":'./src/cart.tsx',

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
};