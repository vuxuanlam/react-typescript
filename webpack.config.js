const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')const PRODUCT = JSON.parse(process.env.PROD_ENV || '0');
const targetPath = __dirname + '/built';

const config = [
  {
    name: 'React Client Package',
    entry: {
      app : './index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(targetPath + '/public/js')
    },
    watch: true,
    mode: 'development',
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
        { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    resolve: {
        // modulesDirectories: ['node_modules', 'components'],
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // new webpack.NoErrorsPlugin(),
        new CheckerPlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true }),
    ],
  }
];

module.exports = config;
