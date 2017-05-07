const path = require('path')

const root = path.resolve(__dirname, '../')

module.exports = {
  src: path.join(root, 'src/'),
  dist: path.join(root, 'dist/'),
  publicPath: '/'
}
