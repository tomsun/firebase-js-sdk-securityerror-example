'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

let webpackConfig = require('./webpack.config.js')();

webpackConfig.mode = 'development';
webpackConfig.devtool = 'eval-source-map';
webpackConfig.entry = [require.resolve('webpack-dev-server/client/')].concat(webpackConfig.entry);
webpackConfig.devServer = {
  contentBase: './examples',
  watchContentBase: false,
  publicPath: '/',
  https: false,
  clientLogLevel: 'none',
  stats: { colors: true },
  compress: true,
  overlay: true,
  hot: false,
  inline: false,
  disableHostCheck: true,
}

let compiler = webpack(webpackConfig);
let devServer = new WebpackDevServer(compiler, webpackConfig.devServer);
devServer.listen(process.env.PORT || 8080, '0.0.0.0', function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('Starting the development server...\n');

  ['SIGINT', 'SIGTERM'].forEach(function(sig) {
    process.on(sig, function() {
      devServer.close();
      process.exit();
    });
  });
});
