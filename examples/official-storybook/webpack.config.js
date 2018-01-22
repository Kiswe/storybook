const path = require('path');

module.exports = {
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, '../../lib/ui/src'),
          path.resolve(__dirname, '../../lib/components/src'),
        ],
      },
    ],
  },
};
