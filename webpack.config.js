const CopyPlugin = require('copy-webpack-plugin');
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
      }
    ]
  },
  output: {
    filename: 'app.[contenthash].js',
    path: join(__dirname, 'dist', 'app')

  },
  plugins: [
    new CopyPlugin([
      {
        from: join(__dirname, 'src', 'app', 'public'),
        to: join(__dirname, 'dist', 'app')
      }
    ]),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src', 'app', 'index.html')
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  }
};
