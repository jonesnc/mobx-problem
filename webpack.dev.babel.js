/* eslint-disable */
import merge from 'webpack-merge';
import common from './webpack.common.babel.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

export default merge(common, {
    entry: {
        app: [
            './src/index.tsx',
        ],
        vendor: [
            'firebase',
            'history',
            'mobx-react-router',
            'react',
            'react-dom',
            'semantic-ui-react',
        ],
    },
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mobx Problem',
            template: 'src/index-dev.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
          }),
        new webpack.NamedModulesPlugin()
    ],
});
