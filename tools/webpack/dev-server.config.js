const locationConfig = require('../location.config')

module.exports = {
  contentBase: locationConfig.dist,
  compress: true,
  port: 5000,
  stats: 'minimal',
  hot: true,
  historyApiFallback: true,
  publicPath: locationConfig.publicPath
}
