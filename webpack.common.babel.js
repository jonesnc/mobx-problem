import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
        },
      },
      {
        test: /\.(png|svg)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css']
  },
  
};
