const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'raw-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  externals: {
    react: 'React',
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    }
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),

    // Fixes warning in moment-with-locales.min.js
    //   Module not found: Error: Can't resolve './locale' in ...
    new webpack.IgnorePlugin(/\.\/locale$/)
  ],

  output: {
    filename: 'dist/alerts.js',
    libraryTarget: 'umd',
    library: 'alerts'
  },

  resolve: { extensions: ['.jsx', '.js'] }
};