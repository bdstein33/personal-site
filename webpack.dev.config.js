var path = require('path'),
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/client.js',
      './src/scss/main.scss'
    ]
    /* THIS IS CAUSING ERRORS */
    // ,
    // style: [
    //   'eventsource-polyfill', // necessary for hot reloading with IE
    //   'webpack-hot-middleware/client',
    //   './src/scss/main.scss'
    // ]
  },
  output: {
    path: path.join(__dirname, '/build/js'),
    publicPath: '/public/js/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss-loader', 'resolve-url', 'sass?sourceMap']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, './src')
        ],
        query: {
          presets: ['react-hmre'],
          cacheDirectory: true
        }
      }
    ]
  },
  postcss: [
    autoprefixer({remove: false, browsers: ['> 1%', 'IE >= 10', 'Firefox >= 37', 'Safari >= 6', 'Android >= 4.0']})
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'node_modules/support-for/sass')]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ProgressBarPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'development',
        API_HOST: 'http://localhost:8000',
        TEST: 'AAAAAAA'
      })
    })
  ]
};
