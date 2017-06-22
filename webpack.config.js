const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    port: 8080,
  },
  entry: path.join(__dirname, 'client', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080'
      },
      {
        reload: false
      }
    )
  ]
};
