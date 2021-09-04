const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
})
