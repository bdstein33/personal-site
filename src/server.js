import Debug from 'debug';
import path from 'path';
import webpack from 'webpack';

// Server Configuration
import express from 'express';
import bodyParser from 'body-parser';

const debug = Debug('Server'),
  server = express(),
  port = process.env.PORT || 3000;

/******************************
WEBPACK AND HMR
******************************/
if (process.env.NODE_ENV === 'development') {
  const webpackConfig = require('../webpack.dev.config.js');
  const compiler = webpack(webpackConfig);

  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    quiet: false,
    publicPath: webpackConfig.output.publicPath
  }));

  server.use(require('webpack-hot-middleware')(compiler));
} else if (process.env.NODE_ENV === 'production') {
  const webpackConfig = require('../webpack.prod.config.js');
  const compiler = webpack(webpackConfig);

  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    quiet: false,
    publicPath: webpackConfig.output.publicPath
  }));
}

/******************************
EXPRESS CONFIGURATION
******************************/
// Static files
server.use('/public', express.static(path.join(__dirname, '../build')));

// Request parsing
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// Allow CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


server.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

server.listen(port, () => {
  debug(`Listening on port ${port}`);
});

export default server;
