const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'raw-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'raw-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
  },
  plugins: [
    // Fixes warning in moment-with-locales.min.js
    //   Module not found: Error: Can't resolve './locale' in ...
    new webpack.IgnorePlugin(/\.\/locale$/)
  ]
};