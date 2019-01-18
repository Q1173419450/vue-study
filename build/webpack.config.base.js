const path = require('path')
// const HTMLPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
// const ExtractPlugin = require('extract-text-webpack-plugin')
const createVueLoaderOptions = require('./vue-loader.config');

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
    // publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx|)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        // 预处理
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: isDev ? '"development"' : '"production"'
  //     }
  //   }),
  //   new HTMLPlugin()
  // ]
}


module.exports = config


