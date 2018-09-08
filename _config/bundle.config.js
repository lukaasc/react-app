const webpack = require('webpack');

module.exports = {
  dev: {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
      app: ['./src/index.js']
    },
    plugins: []
  },
  prod: {
    mode: 'production',
    entry: {
      app: ['./src/index.js']
    },
    plugins: [new webpack.HashedModuleIdsPlugin()]
  }
};
