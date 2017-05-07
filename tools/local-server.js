const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const opn = require('opn')

const webpackConfig = require('./webpack/config.local')
const webpackDevServerConfig = require('./webpack/dev-server.config')

const localServerUrl = `http://localhost:${webpackDevServerConfig.port}`
let successful = false

const compiler = webpack(webpackConfig)
compiler.plugin('done', stats => {
  if (successful) {
    return
  }

  if (stats.toJson().errors.length === 0) {
    successful = true
    opn(localServerUrl)
  }
})

const server = new WebpackDevServer(compiler, webpackDevServerConfig)
server.listen(webpackDevServerConfig.port, 'localhost', () => {
  console.log(`Starting local server on ${localServerUrl}`)
})
