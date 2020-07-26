const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimize: false
  },

  plugins: []
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})