const CopyPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/app/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'app.[contenthash].js',
    path: join(__dirname, 'dist', 'statics'),
    publicPath: '/statics'
  },
  plugins: [
    new CopyPlugin([
      {
        from: join(__dirname, 'src', 'app', 'public'),
        to: join(__dirname, 'dist', 'statics')
      }
    ]),
    new HtmlWebpackPlugin({
      base: 'statics',
      template: join(__dirname, 'src', 'app', 'index.html')
    }),
    new ExtractCssChunks()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  }
};
