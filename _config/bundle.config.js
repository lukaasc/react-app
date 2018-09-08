const path = require('path');
const webpack = require('webpack');

module.exports = {
  dev: {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
      app: ['./src/index.js']
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      contentBase: path.resolve(__dirname, '../', 'dist'),
      host: 'localhost',
      port: 8080,
      compress: true,
      hot: true,
      open: true
    }
  },
  prod: {
    mode: 'production',
    entry: {
      app: ['./src/index.js']
    },
    plugins: [new webpack.HashedModuleIdsPlugin()]
  }
};
