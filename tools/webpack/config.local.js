const webpack = require('webpack')

const webpackConfig = require('./config')
const webpackDevServerConfig = require('./dev-server.config')

module.exports = Object.assign({}, webpackConfig, {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${webpackDevServerConfig.port}`,
    'webpack/hot/only-dev-server',
    webpackConfig.entry
  ],
  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-source-map'
})
