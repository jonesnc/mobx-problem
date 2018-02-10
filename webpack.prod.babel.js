import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

import common from './webpack.common.babel.js';

export default merge(common, {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'semantic-ui-react',
    ],
    app: './src/index.tsx'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: 'Mobx Problem',
      template: 'src/index-prod.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
});