const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
var ZipPlugin = require('zip-webpack-plugin');

module.exports = Merge(CommonConfig, {
  externals: {
    Config: JSON.stringify(require('./config-prod.json'))
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new ZipPlugin({
      filename: 'home-automation-webapp.zip',
      extension: 'zip',
      pathPrefix: './'
    })
  ]
});
