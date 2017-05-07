const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const locationConfig = require('../location.config')

module.exports = {
  entry: path.join(locationConfig.src, 'index.js'),
  output: {
    path: locationConfig.dist,
    publicPath: locationConfig.publicPath,
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [locationConfig.src],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          cacheDirectory: true,
          presets: [
            ['es2015', { modules: false }],
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'only',
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(locationConfig.src, 'index.html'),
      inject: 'body',
      hash: true
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
}
